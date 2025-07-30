
import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  const supabase = createClient();
  try {
    // To switch to a real API, you would uncomment this:
    const { data: courses, error } = await supabase.from('courses').select('*');
    if (error) {
       console.error('Supabase error:', error);
       throw error;
    }
    return NextResponse.json(courses);
  } catch (error) {
    // In a real app, you would fetch from your database and join with instructors
    // For now, we will return the mock data to ensure all fields are present
    // This is a fallback if the database call fails during development
    try {
        const { courses } = await import('@/lib/mock-data');
        return NextResponse.json(courses);
    } catch (mockError) {
        return NextResponse.json({ error: 'Failed to fetch courses from DB and fallback mock data' }, { status: 500 });
    }
  }
}
