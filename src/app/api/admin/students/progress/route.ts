import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { studentProgress } from '@/lib/schema';
import { z } from 'zod';
import { eq } from 'drizzle-orm';

const studentProgressSchema = z.object({
  month: z.string().min(1, { message: "Month is required" }),
  progress: z.number().int().min(0).max(100, { message: "Progress must be between 0 and 100" }),
});

export async function GET() {
  const data = await db.select().from(studentProgress);
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = studentProgressSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.format() }, { status: 400 });
    }

    const newProgress = await db.insert(studentProgress).values(validation.data);
    return NextResponse.json(newProgress, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create progress' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const validation = studentProgressSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.format() }, { status: 400 });
    }

    const url = new URL(request.url);
    const id = Number(url.searchParams.get('id'));

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const updatedProgress = await db.update(studentProgress).set(validation.data).where(eq(studentProgress.id, id));
    return NextResponse.json(updatedProgress);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update progress' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = Number(url.searchParams.get('id'));

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const deletedProgress = await db.delete(studentProgress).where(eq(studentProgress.id, id));
    return NextResponse.json(deletedProgress);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete progress' }, { status: 500 });
  }
}
