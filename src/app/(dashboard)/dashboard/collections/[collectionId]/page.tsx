import { db } from "@/lib/db";
import React from "react";
import CollectionForm from "./components/collection-form";

const page = async ({ params }: { params: { collectionId: string } }) => {
  const collection = await db.collection.findUnique({
    where: { id: params.collectionId },
  });

  return <CollectionForm initialData={collection} />;
};

export default page;
