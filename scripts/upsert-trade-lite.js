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
    slug: "trade-lite",
    title: "TradeLite",
    tagline: "Stop Paying $3,000/mo for Features You Don't Use.",
    status: "active",
    painQuotes: JSON.stringify([
      "ServiceTitan costs $2-3k/mo more than competitors. (r/hvacadvice)",
      "Features are overkill for small shops (<10 techs).",
      "ServiceTitan costs more than my truck payment. — Reddit User"
    ]),
    valueProp: "The lean ServiceTitan alternative for HVAC and Plumbing shops with <10 trucks. Get the essentials. Save the cash.",
    sprintStart: new Date(),
    sprintEnd: new Date(Date.now() + 1000 * 60 * 60 * 48), // 48h
    signupGoal: 15
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
