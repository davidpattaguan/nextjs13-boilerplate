import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";

import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { collectionId: string } }
) {
  try {
    const session = await getAuthSession();

    const body = await req.json();
    const { name } = body;
    if (!session?.user.id) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Name is Required", { status: 400 });
    }

    const user = await db.user.updateMany({
      where: {
        id: session.user.id,
      },
      data: {
        name,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log("[COLLECTION_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { collectionId: string } }
) {
  try {
    const session = await getAuthSession();

    if (!session?.user.id) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!params.collectionId) {
      return new NextResponse("Store Id is Required}", { status: 400 });
    }

    const collection = await db.collection.deleteMany({
      where: {
        id: params.collectionId,
        userId: session.user.id,
      },
    });

    return NextResponse.json(collection);
  } catch (error) {
    console.log("[COLLECTION_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
