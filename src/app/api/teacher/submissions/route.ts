import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { recentSubmissions } from '@/lib/schema';

export async function GET() {
  const data = await db.select().from(recentSubmissions);
  return NextResponse.json(data);
}
