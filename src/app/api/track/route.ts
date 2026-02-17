import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { product, event, metadata } = await req.json();

    if (!product || !event) {
      return NextResponse.json({ error: "Product and event are required" }, { status: 400 });
    }

    await prisma.trackingEvent.create({
      data: {
        product,
        event,
        metadata: JSON.stringify(metadata),
      },
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Track error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
