const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const pg = require("pg");

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }

  const pool = new pg.Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });

  const idea = {
    slug: "barber-flow",
    title: "BarberFlow",
    tagline: "Stop Paying \"Marketplace Taxes\" on Your Own Clients.",
    status: "active",
    painQuotes: JSON.stringify([
      "Squire charges payment processing fees for both barbers AND clients. It's double dipping. (Verified r/Barber User)",
      "Booksy does not care about you, only that you run paid ads. (Barbershop Owner)",
      "The whole thing feels misleading to funnel clients through squire to pay them a fee."
    ]),
    valueProp: "The \"Anti-Marketplace\" Booking Tool. No Client Booking Fees. No \"Discover\" Marketplace. Simple Flat Rate.",
    sprintStart: new Date(),
    sprintEnd: new Date(Date.now() + 1000 * 60 * 60 * 48), // 48h
    signupGoal: 20
  };

  console.log(`Upserting ${idea.slug}...`);
  
  await prisma.arenaIdea.upsert({
    where: { slug: idea.slug },
    update: {
      title: idea.title,
      tagline: idea.tagline,
      status: idea.status,
      painQuotes: idea.painQuotes,
      valueProp: idea.valueProp,
      sprintStart: idea.sprintStart,
      sprintEnd: idea.sprintEnd,
      signupGoal: idea.signupGoal,
    },
    create: {
      ...idea,
      signupCount: 0
    },
  });

  console.log("Done.");
  await prisma.$disconnect();
  await pool.end();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
