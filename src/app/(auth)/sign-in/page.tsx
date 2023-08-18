import SignIn from "@/components/sign-in";
import { buttonVariants } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth";

import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FC } from "react";

const page: FC = async () => {
  const session = await getAuthSession();

  if (session) {
    redirect("/");
  }

  return (
    <div className="absolute inset-0">
      <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
        <SignIn />
      </div>
    </div>
  );
};

export default page;
