import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { financialOverview } from '@/lib/schema';
import { z } from 'zod';
import { eq } from 'drizzle-orm';

const financialOverviewSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  value: z.number().int(),
});

export async function GET() {
  const data = await db.select().from(financialOverview);
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = financialOverviewSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.format() }, { status: 400 });
    }

    const newOverview = await db.insert(financialOverview).values(validation.data);
    return NextResponse.json(newOverview, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create overview' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const validation = financialOverviewSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.format() }, { status: 400 });
    }

    const url = new URL(request.url);
    const id = Number(url.searchParams.get('id'));

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const updatedOverview = await db.update(financialOverview).set(validation.data).where(eq(financialOverview.id, id));
    return NextResponse.json(updatedOverview);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update overview' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = Number(url.searchParams.get('id'));

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const deletedOverview = await db.delete(financialOverview).where(eq(financialOverview.id, id));
    return NextResponse.json(deletedOverview);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete overview' }, { status: 500 });
  }
}
