import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { upcomingClasses } from '@/lib/schema';

export async function GET() {
  const data = await db.select().from(upcomingClasses);
  return NextResponse.json(data);
}
