import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { enrollments } from '@/lib/schema';
import { z } from 'zod';
import { eq } from 'drizzle-orm';

const enrollmentSchema = z.object({
  student: z.string().min(1, { message: "Student is required" }),
  course: z.string().min(1, { message: "Course is required" }),
  status: z.string().min(1, { message: "Status is required" }),
  payment: z.string().min(1, { message: "Payment is required" }),
});

export async function GET() {
  const data = await db.select().from(enrollments);
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = enrollmentSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.format() }, { status: 400 });
    }

    const newEnrollment = await db.insert(enrollments).values(validation.data);
    return NextResponse.json(newEnrollment, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create enrollment' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const validation = enrollmentSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.format() }, { status: 400 });
    }

    const url = new URL(request.url);
    const id = Number(url.searchParams.get('id'));

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const updatedEnrollment = await db.update(enrollments).set(validation.data).where(eq(enrollments.id, id));
    return NextResponse.json(updatedEnrollment);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update enrollment' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = Number(url.searchParams.get('id'));

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const deletedEnrollment = await db.delete(enrollments).where(eq(enrollments.id, id));
    return NextResponse.json(deletedEnrollment);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete enrollment' }, { status: 500 });
  }
}
