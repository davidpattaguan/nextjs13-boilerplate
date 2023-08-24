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
import { useMutation } from "@tanstack/react-query";

interface UserFormProps {
  initialData: User | null;
}

const formSchema = z.object({
  name: z.string().min(1),
});

type UserFormValue = z.infer<typeof formSchema>;

const UserEditForm: React.FC<UserFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  //Actions
  const title = initialData ? "Edit User" : "Create Collection";
  const description = initialData ? "Edit User details" : "Add a new details";
  const toastMessage = initialData ? "Successfully Updated " : "User created";
  const action = initialData ? "Save Changes" : "Add New User";

  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData as any,
  });

  //Mutation - Update User
  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: async (data: UserFormValue) => {
      if (initialData) {
        await axios.patch(`/api/users/`, data);
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

  const onSubmit = async (data: UserFormValue) => {
    updateUser(data);
  };

  return (
    <>
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
                          disabled={isLoading}
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
            <Button disabled={isLoading} className="ml-auto" type="submit">
              {action}
            </Button>
          </form>
        </Form>
      </DashboardShell>
    </>
  );
};

export default UserEditForm;
