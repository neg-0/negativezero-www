import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Attempt to fetch from Mission Control
    const res = await fetch('http://control.neg0.cloud/api/ideas', {
      next: { revalidate: 60 }, // Cache for 60 seconds
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      const data = await res.json();
      // Transform data if necessary to match expected format
      // Expecting array of ideas or stats object. 
      // If array, we count by stage.
      
      let stats = {
        prospector: 0,
        audit: 0,
        copy: 0,
        landing: 0,
        sprint: 0,
        verdict: 0,
        total: 0
      };

      if (Array.isArray(data)) {
        stats.total = data.length;
        data.forEach((idea: any) => {
          // Normalize stage names to our pipeline keys
          const stage = idea.stage?.toLowerCase() || 'prospector';
          if (stage.includes('prospect')) stats.prospector++;
          else if (stage.includes('audit')) stats.audit++;
          else if (stage.includes('copy')) stats.copy++;
          else if (stage.includes('landing')) stats.landing++;
          else if (stage.includes('sprint') || stage.includes('build')) stats.sprint++;
          else if (stage.includes('verdict') || stage.includes('done')) stats.verdict++;
          else stats.prospector++;
        });
      }
      
      return NextResponse.json(stats);
    }
  } catch (error) {
    console.error('Failed to fetch refinery stats:', error);
  }

  // Fallback data if MC is down or errors
  return NextResponse.json({
    prospector: 34,
    audit: 12,
    copy: 8,
    landing: 5,
    sprint: 4,
    verdict: 3,
    total: 66
  });
}
