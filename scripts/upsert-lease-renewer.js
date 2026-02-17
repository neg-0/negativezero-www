const { PrismaClient } = require('@prisma/client')
const { PrismaPg } = require('@prisma/adapter-pg')
const pg = require('pg')
require('dotenv').config()

async function main() {
  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
  const adapter = new PrismaPg(pool)
  const prisma = new PrismaClient({ adapter })

  const idea = await prisma.arenaIdea.upsert({
    where: { slug: 'lease-renewer' },
    update: {
      title: 'The Anti-Portal Lease Renewer',
      tagline: 'Stop Manually Chasing Lease Renewals.',
      status: 'active',
      painQuotes: JSON.stringify([
        "I manage 10 units and spend hours every month manually drafting renewal letters, tracking who replied, and creating new lease documents. I don't want to pay $200/mo for Buildium just for this.",
        "We use... custom automations through zapier for lease renewals... great for reducing manual tasks."
      ]),
      sprintStart: new Date(),
      sprintEnd: new Date(Date.now() + 48 * 60 * 60 * 1000), // 48 hours from now
    },
    create: {
      slug: 'lease-renewer',
      title: 'The Anti-Portal Lease Renewer',
      tagline: 'Stop Manually Chasing Lease Renewals.',
      status: 'active',
      painQuotes: JSON.stringify([
        "I manage 10 units and spend hours every month manually drafting renewal letters, tracking who replied, and creating new lease documents. I don't want to pay $200/mo for Buildium just for this.",
        "We use... custom automations through zapier for lease renewals... great for reducing manual tasks."
      ]),
      sprintStart: new Date(),
      sprintEnd: new Date(Date.now() + 48 * 60 * 60 * 1000),
    },
  })
  console.log('Upserted idea:', idea)
  await prisma.$disconnect()
  await pool.end()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
