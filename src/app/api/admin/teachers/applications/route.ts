import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { teacherApplications } from '@/lib/schema';
import { z } from 'zod';
import { eq } from 'drizzle-orm';

const teacherApplicationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  status: z.string().min(1, { message: "Status is required" }),
});

export async function GET() {
  const data = await db.select().from(teacherApplications);
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = teacherApplicationSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.format() }, { status: 400 });
    }

    const newApplication = await db.insert(teacherApplications).values(validation.data);
    return NextResponse.json(newApplication, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create application' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const validation = teacherApplicationSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.format() }, { status: 400 });
    }

    const url = new URL(request.url);
    const id = Number(url.searchParams.get('id'));

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const { name, email, status } = validation.data;

    const updatedApplication = await db.update(teacherApplications)
      .set({ status })
      .where(eq(teacherApplications.id, id));
      
    return NextResponse.json(updatedApplication);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update application' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = Number(url.searchParams.get('id'));

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const deletedApplication = await db.delete(teacherApplications).where(eq(teacherApplications.id, id));
    return NextResponse.json(deletedApplication);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete application' }, { status: 500 });
  }
}
