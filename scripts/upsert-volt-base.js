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
    slug: "volt-base",
    title: "VoltBase",
    tagline: "Stop Spending 800 Hours Building Your Pricebook.",
    status: "active",
    painQuotes: JSON.stringify([
      "I have 800 hours into my Accubid database... I wish I could just buy one. — r/estimators",
      "The biggest drawback is the lag time... database was not even remotely close to being fully built out.",
      "I feel like I’m gonna be stuck forever making my own never ending assembly database."
    ]),
    valueProp: "The only pre-loaded electrical estimating tool. 15,000+ assemblies and live supplier pricing from day one.",
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
