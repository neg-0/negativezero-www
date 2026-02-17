const { PrismaClient } = require('@prisma/client');

async function main() {
  const prisma = new PrismaClient({
    __internal: {
      configOverride: (config) => {
        config.engineType = 'binary';
        return config;
      }
    }
  });

  const idea = {
    slug: 'lease-renewer',
    title: 'Anti-Portal Lease Renewer',
    tagline: 'The "Reply YES" Lease Renewal. SMS-first workflow.',
    status: 'active',
    painQuotes: JSON.stringify(["Lease dates overlapping feels like herding cats.", "Tenants ignore emails."]),
    valueProp: 'Automate the entire renewal process via text message. 90-day triggers. Zero chasing.',
    signupGoal: 20
  };

  await prisma.arenaIdea.upsert({
    where: { slug: idea.slug },
    update: {
      title: idea.title,
      tagline: idea.tagline,
      status: idea.status,
      painQuotes: idea.painQuotes,
      valueProp: idea.valueProp,
      signupGoal: idea.signupGoal,
    },
    create: {
      ...idea,
      signupCount: 0,
    },
  });

  console.log('Upserted lease-renewer to DB');
  await prisma.$disconnect();
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
