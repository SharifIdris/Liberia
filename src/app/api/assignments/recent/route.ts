import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { recentAssignments } from '@/lib/schema';

export async function GET() {
  const data = await db.select().from(recentAssignments);
  return NextResponse.json(data);
}
