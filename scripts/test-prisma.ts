import { prisma } from "../src/lib/prisma";
import "dotenv/config";

async function main() {
  try {
    const ideas = await prisma.arenaIdea.findMany();
    console.log("Ideas in DB:", ideas.map(i => i.slug));
  } catch (e) {
    console.error("Failed to fetch ideas:", e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
