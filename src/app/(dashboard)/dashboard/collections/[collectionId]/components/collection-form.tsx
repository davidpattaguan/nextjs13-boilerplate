"use client";
import { Collection } from "@prisma/client";
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
import { useMutation } from "@tanstack/react-query";

interface CollectionFormProps {
  initialData: Collection | null;
}

const formSchema = z.object({
  name: z.string().min(1),
});

type CollectionFormValue = z.infer<typeof formSchema>;

const CollectionForm: React.FC<CollectionFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const title = initialData ? "Edit Collection" : "Create Collection";
  const description = initialData ? "Edit Collection" : "Add a new Collection";

  const toastMessage = initialData
    ? "Successfully Updated "
    : "Collection created";

  const action = initialData ? "Save Changes" : "Add New Collection";

  const form = useForm<CollectionFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || { name: "" },
  });

  const { mutate: createCollection, isLoading: creating } = useMutation({
    mutationFn: async (data: CollectionFormValue) => {
      if (initialData) {
        await axios.patch(`/api/collections/${params.collectionId}`, data);
      } else {
        await axios.post(`/api/collections/`, data);
      }
    },
    onError: (err) => {
      toast({ title: "Error!", variant: "destructive" });
    },
    onSuccess: (data) => {
      router.refresh();
      router.push(`/dashboard`);
      toast({ title: toastMessage });
    },
  });

  const { mutate: deleteCollection, isLoading: deleting } = useMutation({
    mutationFn: async () => {
      await axios.delete(`/api/collections/${params.collectionId}`);
    },
    onError: (err) => {
      toast({ title: "Error!", variant: "destructive" });
    },
    onSuccess: (data) => {
      router.refresh();
      router.push(`/dashboard`);
      toast({ title: "Successfully Deleted!" });
    },
  });

  const onSubmit = async (data: CollectionFormValue) => {
    createCollection(data);
  };

  const onDelete = async () => {
    deleteCollection();
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={creating || deleting}
      />
      <DashboardShell className="mt-7">
        <DashboardHeader heading={title} text={description}>
          <div className="flex items-center justify-between">
            {initialData && (
              <Button
                disabled={creating || deleting}
                variant="destructive"
                className="bg-red-500 gap-2"
                onClick={() => {
                  setOpen(true);
                }}
              >
                Delete Collection
                <Icons.trash className="w-4 h-4"></Icons.trash>
              </Button>
            )}
          </div>
        </DashboardHeader>

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
                          disabled={creating || deleting}
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
            <Button
              disabled={creating || deleting}
              className="ml-auto"
              type="submit"
            >
              {action}
            </Button>
          </form>
        </Form>
      </DashboardShell>
    </>
  );
};

export default CollectionForm;
