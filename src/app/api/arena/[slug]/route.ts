import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const idea = await prisma.arenaIdea.findUnique({
      where: { slug },
    });

    if (!idea) {
      return NextResponse.json({ error: "Idea not found" }, { status: 404 });
    }

    // Parse painQuotes if it's stored as JSON string (SQLite compatibility)
    let painQuotes: any = idea.painQuotes;
    if (typeof painQuotes === 'string') {
      try {
        painQuotes = JSON.parse(painQuotes);
      } catch (e) {
        // if not json, return as single item array or raw string
        painQuotes = [painQuotes]; 
      }
    }

    return NextResponse.json({
      ...idea,
      painQuotes
    });
  } catch (error) {
    console.error("Arena fetch error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
