import { NextResponse } from 'next/server';

export async function GET() {
  const stats = {
    activeUsers: 1234,
    newUsers: 856,
    totalAppOpens: 12543,
    avgHealthScore: 94.5,
    interventionCompletion: {
      mentalHealth: 87,
      physicalActivity: 92,
      nutrition: 78,
      sleepQuality: 85,
    },
    systemUptime: 99.8,
    apiUsage: [65, 45, 78, 90, 55, 88, 72],
  };

  return NextResponse.json({ success: true, data: stats });
}
