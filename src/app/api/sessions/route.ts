import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { upcomingSessions } from '@/lib/schema';

export async function GET() {
  const data = await db.select().from(upcomingSessions);
  return NextResponse.json(data);
}
