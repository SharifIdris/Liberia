import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { assignments } from '@/lib/schema';

export async function GET() {
  const data = await db.select().from(assignments);
  return NextResponse.json(data);
}
