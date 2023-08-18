import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();

    const body = await req.json();

    const { name } = body;

    if (!session?.user.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Name is Required", { status: 400 });
    }

    const collection = await db.collection.create({
      data: {
        name,
        userId: session.user.id,
      },
    });

    console.log(collection);

    return NextResponse.json(collection);
  } catch (error) {
    console.log("[STORES_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
