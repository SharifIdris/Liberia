import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { enrollments } from '@/lib/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  // Assuming you have a way to identify the current teacher, e.g., from a session
  const teacherId = 1; // Placeholder for the current teacher's ID
  const data = await db.select().from(enrollments).where(eq(enrollments.id, teacherId));
  return NextResponse.json(data);
}
