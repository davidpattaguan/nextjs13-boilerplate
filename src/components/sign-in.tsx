import UserAuthForm from "./forms/user-auth-form";
import Link from "next/link";
import { Icons } from "@/components/icons";

const SignIn = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome back to
          <span className="text-primary">Nextjs Boilerplate</span>
        </h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you are setting up a Nextjs Boilerplate account and
          agree to our User Agreement and Privacy Policy.
        </p>
      </div>
      <UserAuthForm />
    </div>
  );
};

export default SignIn;
