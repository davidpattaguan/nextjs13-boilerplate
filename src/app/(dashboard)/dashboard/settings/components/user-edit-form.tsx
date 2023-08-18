"use client";
import { User } from "@prisma/client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { DashboardShell } from "@/components/shells/dashboard-shell";
import { DashboardHeader } from "@/components/shells/dashboard-header";
import { AlertModal } from "@/components/modals/alert-modal";
import { Icons } from "@/components/icons";

interface CollectionFormProps {
  initialData: User | null;
}

const formSchema = z.object({
  name: z.string().min(1),
});

type CollectionFormValue = z.infer<typeof formSchema>;

const UserEditForm: React.FC<CollectionFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData ? "Edit User" : "Create Collection";
  const description = initialData
    ? "Edit Billboard Description"
    : "Add a new Billboard";

  const toastMessage = initialData
    ? "Successfully Updated "
    : "Billboard created";

  const action = initialData ? "Save Changes" : "Add New Collection";

  const form = useForm<CollectionFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData as any,
  });

  const onSubmit = async (data: CollectionFormValue) => {
    try {
      setLoading(true);

      if (initialData) {
        await axios.patch(`/api/users/`, data);
      } else {
        await axios.post(`/api/collections/`, data);
      }

      router.refresh();
      router.push(`/dashboard`);
      toast({ title: toastMessage });
    } catch (error) {
      console.log(error);
      toast({ title: "Error!", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/collections/${params.collectionId}`);
      router.refresh();
      router.push(`/dashboard`);
      toast({ title: "Successfully Deleted Collection!" });
    } catch (error) {
      toast({
        title: "Failed to Delete Collection",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <DashboardShell className="mt-7">
        <DashboardHeader heading={title} text={description}></DashboardHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <div className="grid grid-cols-2 mt-0">
              <div className="grid grid-cols-1">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Enter Collection Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button disabled={loading} className="ml-auto" type="submit">
              {action}
            </Button>
          </form>
        </Form>
      </DashboardShell>
    </>
  );
};

export default UserEditForm;
