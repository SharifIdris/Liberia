import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { courses } from '@/lib/schema';
import { z } from 'zod';
import { eq } from 'drizzle-orm';

const courseSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  image: z.string().min(1, { message: "Image is required" }),
});

export async function GET() {
  const data = await db.select().from(courses);
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = courseSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.format() }, { status: 400 });
    }

    const newCourse = await db.insert(courses).values(validation.data);
    return NextResponse.json(newCourse, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create course' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const validation = courseSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.format() }, { status: 400 });
    }

    const url = new URL(request.url);
    const id = Number(url.searchParams.get('id'));

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const updatedCourse = await db.update(courses).set(validation.data).where(eq(courses.id, id));
    return NextResponse.json(updatedCourse);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update course' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = Number(url.searchParams.get('id'));

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const deletedCourse = await db.delete(courses).where(eq(courses.id, id));
    return NextResponse.json(deletedCourse);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete course' }, { status: 500 });
  }
}
