import { Button, buttonVariants } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      {/* <div className="container relative grid items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="md:p-6">
          <div className="mx-auto flex w-full flex-col justify-center  sm:w-[550px]">
            <div className="flex flex-col mt-5 lg:mt-5">
              <h1 className="font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                BoilerPlate
              </h1>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                Where Trust Finds Its True Signature. A simple authentication
                and verification app for your items.
              </p>
              <div className="space-x-4 mt-8">
                <Link
                  href="/sign-in"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "default" }),
                    "bg-primary"
                  )}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>

        <img
          alt="cover photo"
          src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          className="h-full w-full object-cover max-h-[93vh] xs:hidden lg:flex mt-0 "
        />
      </div> */}

      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Next.js Simple Boilerplate
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A Basic Starter Template for Next.js 13
          </p>
          <div className="space-x-4">
            <Link
              href="/sign-in"
              className={cn(
                buttonVariants({ size: "lg", variant: "default" }),
                "bg-primary"
              )}
            >
              Get Started
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          {/* <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            At Imauthentic, we're more than just an application – we're your
            digital safeguard against fraud, forgery, and doubts. Our
            cutting-edge technology harnesses the power of innovation to provide
            you with unparalleled authentication, backed by advanced features
            and unbeatable convenience.
          </p> */}
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Shadcn UI</h3>
                <p className="text-sm text-muted-foreground">
                  Elevate design with seamless aesthetics and functionality for
                  captivating user experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">React Query</h3>
                <p className="text-sm text-muted-foreground">
                  Effortlessly manage and optimize data fetching in React
                  applications for enhanced performance and user interactivity.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Prisma</h3>
                <p className="text-sm text-muted-foreground">
                  Empower your database workflows with a modern and intuitive
                  ORM (Object-Relational Mapping) that simplifies data access
                  and manipulation for efficient development.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Auth.js</h3>
                <p className="text-sm text-muted-foreground">
                  Streamline authentication in your applications with this
                  powerful JavaScript library, ensuring secure user access and
                  seamless identity management.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Planetscale</h3>
                <p className="text-sm text-muted-foreground">
                  Revolutionize database management with a fully managed
                  platform, offering effortless scaling and high availability
                  for cloud-native applications.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Based from Open Source</h3>
                <p className="text-sm text-muted-foreground">
                  Building upon various open source projects to create a unique
                  and innovative solution, harnessing the collective power of
                  collaborative development for a truly customized outcome.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          {/* <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Imauthentic is more than just an application – it's your partner in
            building a world of trust and reliability. Whether you're a business
            professional safeguarding important contracts or a savvy shopper
            ensuring the quality of your purchases, we're here to empower you
            with the confidence you deserve.
          </p> */}
        </div>
      </section>
    </>
  );
}
