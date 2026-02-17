const { PrismaClient } = require("@prisma/client");

async function main() {
  const prisma = new PrismaClient();

  const idea = {
    slug: "saas-waste-auditor",
    title: "SaaS Waste Auditor",
    tagline: "Stop Burning Cash on \"Zombie\" SaaS Seats.",
    status: "active",
    painQuotes: JSON.stringify([
      "Found out our startup wasted $2.8k/month on tools nobody used... IT should be involved but we aren't. (r/sysadmin, Oct 2025)",
      "Paying for 50 Notion seats but only 30 log in.",
      "Finance sees the invoice, IT sees the user list, nobody sees both."
    ]),
    valueProp: "The lightweight spend tracker for 10-200 person companies. Connects your invoices to your user logins to find unused licenses instantly.",
    sprintStart: new Date(),
    sprintEnd: new Date(Date.now() + 1000 * 60 * 60 * 48), // 48h
    signupGoal: 25
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
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
