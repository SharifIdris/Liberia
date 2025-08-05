import { db } from '@/lib/db';
import { notifications } from '@/lib/schema';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { recipient, subject, message } = await req.json();

  if (!recipient || !subject || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    await db.insert(notifications).values({
      recipient,
      subject,
      message,
    });
    return NextResponse.json({ message: 'Notification sent successfully' });
  } catch (error) {
    console.error('Error sending notification:', error);
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 });
  }
}
