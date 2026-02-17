import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email, product, source, referrer } = await req.json();

    if (!email || !product) {
      return NextResponse.json({ error: "Email and product are required" }, { status: 400 });
    }

    // Check if waitlist entry already exists
    const existing = await prisma.waitlistEntry.findFirst({
      where: {
        email,
        product,
      },
    });

    if (existing) {
       // Return current count for product
       const count = await prisma.waitlistEntry.count({
         where: { product },
       });
       return NextResponse.json({ message: "Already signed up", count });
    }

    // Create entry
    await prisma.waitlistEntry.create({
      data: {
        email,
        product,
        source,
        referrer,
      },
    });

    // Try to update ArenaIdea signup count if it exists
    const idea = await prisma.arenaIdea.findUnique({ where: { slug: product } });
    if (idea) {
      await prisma.arenaIdea.update({
        where: { slug: product },
        data: { signupCount: { increment: 1 } },
      });
    }

    const count = await prisma.waitlistEntry.count({
      where: { product },
    });

    return NextResponse.json({ message: "Signed up!", count }, { status: 201 });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
