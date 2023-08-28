import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Startup Suite
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
                  Building upon various open source projects, harnessing the
                  collective power of collaborative development for a truly
                  customized outcome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
