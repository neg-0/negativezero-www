const pg = require('pg');
const { execSync } = require('child_process');

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

async function seed() {
  const raw = execSync('curl -sL http://control.neg0.cloud/api/ideas', { maxBuffer: 1024*1024 }).toString();
  const ideas = JSON.parse(raw);
  console.log('Fetched', ideas.length, 'ideas from MC');
  
  const ready = ideas.filter(i => 
    ['copy_draft','brief_sent','landing_page_complete','outreach_scan','outreach_exec'].includes(i.stage)
  );
  console.log(ready.length, 'ideas at copy_draft+ stage');
  
  const showcases = [
    { title: 'ShipLog', slug: 'shiplog', description: 'The DevOps Dashboard that doesn\'t suck. AI-powered changelogs from your Git history.', status: 'graduated', signupGoal: 50 },
    { title: 'ArmourMail', slug: 'armourmail', description: 'Email security for AI agents. SPF/DKIM validation and threat detection.', status: 'graduated', signupGoal: 100 },
    { title: 'Chocks', slug: 'chocks', description: 'SkillBridge opportunity matching for transitioning veterans.', status: 'graduated', signupGoal: 30 },
  ];
  
  const all = [...ready, ...showcases];
  let count = 0;
  
  const sql = `INSERT INTO "ArenaIdea" (id, slug, title, tagline, status, "painQuotes", "valueProp", "signupCount", "signupGoal", "createdAt", "updatedAt")
    VALUES (gen_random_uuid(), $1, $2, $3, $4, $5::jsonb, $6, 0, $7, NOW(), NOW())
    ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title, tagline = EXCLUDED.tagline, status = EXCLUDED.status, "updatedAt" = NOW()`;
  
  for (const idea of all) {
    const slug = idea.slug || idea.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/g, '');
    const tagline = idea.tagline || idea.description || 'Experimental Product';
    const status = idea.status === 'graduated' ? 'graduated' : 'active';
    const painQuotes = JSON.stringify(idea.painQuotes || []);
    
    try {
      await pool.query(sql, [slug, idea.title, tagline, status, painQuotes, '', idea.signupGoal || 10]);
      console.log('  ✅', slug);
      count++;
    } catch(e) {
      console.error('  ❌', slug, e.message.substring(0,100));
    }
  }
  
  const total = await pool.query('SELECT COUNT(*) FROM "ArenaIdea"');
  console.log('\nSeeded:', count, '| Total in DB:', total.rows[0].count);
  await pool.end();
}

seed().catch(e => { console.error(e); process.exit(1); });
