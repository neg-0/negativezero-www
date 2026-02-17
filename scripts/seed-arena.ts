import { prisma } from "../src/lib/prisma";
import "dotenv/config";

async function main() {
  console.log("Fetching ideas from Mission Control...");
  
  try {
    // In a real scenario, check if this endpoint is reachable from the build environment
    const response = await fetch("http://control.neg0.cloud/api/ideas");
    
    if (!response.ok) {
      console.warn(`Failed to fetch ideas: ${response.status} ${response.statusText}`);
      // Fallback to mock data if API is unreachable
      console.log("Using mock data fallback...");
      await seedMockData();
      return;
    }

    const ideas = await response.json();
    console.log(`Found ${ideas.length} ideas.`);

    if (ideas.length === 0) {
      console.log("No ideas returned. Seeding mock data.");
      await seedMockData();
      return;
    }

    for (const idea of ideas) {
      await upsertIdea(idea);
    }
    
    console.log("Seeding complete.");
  } catch (error) {
    console.error("Error fetching from MC, falling back to mock data:", error);
    await seedMockData();
  } finally {
    await prisma.$disconnect();
  }
}

async function upsertIdea(idea: any) {
  console.log(`Processing idea: ${idea.title}`);
      
  const slug = idea.slug || idea.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  
  // Ensure painPoints is array of strings
  const painPoints = Array.isArray(idea.painPoints) ? idea.painPoints : 
                     Array.isArray(idea.painQuotes) ? idea.painQuotes : [];
  
  // Note: For Json field in Prisma (Postgres) or our Mock, we pass the object/array directly.
  
  await prisma.arenaIdea.upsert({
    where: { slug },
    update: {
      title: idea.title,
      tagline: idea.tagline || idea.description || "Experimental Product",
      status: idea.status || "active",
      painQuotes: painPoints,
      valueProp: idea.valueProp || idea.problem || "",
      sprintStart: idea.sprintStart ? new Date(idea.sprintStart) : undefined,
      sprintEnd: idea.sprintEnd ? new Date(idea.sprintEnd) : undefined,
      signupGoal: idea.signupGoal || 10,
    },
    create: {
      slug,
      title: idea.title,
      tagline: idea.tagline || idea.description || "Experimental Product",
      status: idea.status || "active",
      painQuotes: painPoints,
      valueProp: idea.valueProp || idea.problem || "",
      sprintStart: idea.sprintStart ? new Date(idea.sprintStart) : undefined,
      sprintEnd: idea.sprintEnd ? new Date(idea.sprintEnd) : undefined,
      signupCount: 0,
      signupGoal: idea.signupGoal || 10,
    },
  });
}

async function seedMockData() {
  const mockIdeas = [
    {
      title: "ShipLog",
      slug: "shiplog",
      tagline: "The DevOps Dashboard that doesn't suck.",
      painPoints: ["Jira is too slow", "Linear is too simple", "GitHub Projects is messy"],
      valueProp: "A unified view of your shipping velocity.",
      status: "active",
      sprintEnd: new Date(Date.now() + 1000 * 60 * 60 * 48).toISOString(), // 48h from now
      signupGoal: 50
    },
    {
      title: "ArmourMail",
      slug: "armourmail",
      tagline: "Email security for the paranoid.",
      painPoints: ["Phishing is getting smarter", "Spam filters are broken"],
      valueProp: "AI-driven threat detection for your inbox.",
      status: "active",
      sprintEnd: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(), // 24h from now
      signupGoal: 100
    }
  ];

  for (const idea of mockIdeas) {
    await upsertIdea(idea);
  }
}

main();
