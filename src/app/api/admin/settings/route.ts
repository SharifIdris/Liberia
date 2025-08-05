import { db } from '@/lib/db';
import { settings } from '@/lib/schema';
import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const [existingSettings] = await db.select().from(settings).limit(1);
    if (existingSettings) {
      await db.update(settings).set(body).where(eq(settings.id, existingSettings.id));
    } else {
      await db.insert(settings).values(body);
    }
    return NextResponse.json({ message: 'Settings saved successfully' });
  } catch (error) {
    console.error('Error saving settings:', error);
    return NextResponse.json({ error: 'Failed to save settings' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const [existingSettings] = await db.select().from(settings).limit(1);
    return NextResponse.json(existingSettings);
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}
