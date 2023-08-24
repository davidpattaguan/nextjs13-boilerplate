import UserAuthForm from "./forms/user-auth-form";
import Link from "next/link";
import { Icons } from "@/components/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Shell } from "./shells/shell";

const SignIn = () => {
  return (
    // <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
    //   <div className="flex flex-col space-y-2 text-center">
    //     <h1 className="text-2xl font-semibold tracking-tight">
    //       Welcome back to
    //       <span className="text-primary">Nextjs Boilerplate</span>
    //     </h1>
    //     <p className="text-sm max-w-xs mx-auto">
    //       By continuing, you are setting up a Nextjs Boilerplate account and
    //       agree to our User Agreement and Privacy Policy.
    //     </p>
    //   </div>
    //   <UserAuthForm />
    // </div>
    <>
      <Shell className="max-w-lg">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Sign in</CardTitle>
            <CardDescription>
              Choose your preferred sign in method
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <UserAuthForm />

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-sm text-muted-foreground">
              <span className="mr-1 hidden sm:inline-block">
                Don&apos;t have an account?
              </span>
              <Link
                aria-label="Sign up"
                href="/signup"
                className="text-primary underline-offset-4 transition-colors hover:underline"
              >
                Sign up
              </Link>
            </div>
            <Link
              aria-label="Reset password"
              href="/signin/reset-password"
              className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
            >
              Reset password
            </Link>
          </CardFooter>
        </Card>
      </Shell>
    </>
  );
};

export default SignIn;
