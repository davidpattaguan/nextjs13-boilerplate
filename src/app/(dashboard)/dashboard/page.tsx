import CollectionCard from "@/components/cards/collection-card";
import { EmptyPlaceholder } from "@/components/empty-placeholder";
import { DashboardHeader } from "@/components/shells/dashboard-header";
import { DashboardShell } from "@/components/shells/dashboard-shell";
import { Shell } from "@/components/shells/shell";
import { Button, buttonVariants } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function Home() {
  const session = await getAuthSession();

  const posts = await db.collection.findMany({
    where: { userId: session?.user.id },
  });

  return (
    <DashboardShell className="mt-7">
      <DashboardHeader heading="Dashboard" text="Create and manage files.">
        <Link
          href={`/dashboard/collections/new`}
          className={cn(buttonVariants({ variant: "default" }), "bg-primary")}
        >
          Create a collection
        </Link>
      </DashboardHeader>
      <div>
        {posts?.length ? (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-5">
            {posts.map((post) => (
              <CollectionCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Title>No Collection Yet.</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any collection yet. Start creating collections
              and add your documents.
            </EmptyPlaceholder.Description>
            <Button>Create A Collection</Button>
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  );
}
