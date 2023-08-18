import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CollectionCardProps {
  post: { name: string; id: string };
}

const CollectionCard = ({ post }: CollectionCardProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{post.name}</CardTitle>
      </CardHeader>
      <CardFooter className="">
        <Link
          className={cn(buttonVariants({ variant: "default" }))}
          href={`/dashboard/collections/${post.id}`}
        >
          Update
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CollectionCard;
