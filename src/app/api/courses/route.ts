
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    // In a real app, you would fetch from your database and join with instructors
    // For now, we will return the mock data to ensure all fields are present
    const { courses } = await import('@/lib/mock-data');
    return NextResponse.json(courses);
  } catch (error) {
    // To switch to a real API, you would uncomment this:
    // const { data: courses, error } = await supabase.from('courses').select('*');
    // if (error) {
    //   console.error('Supabase error:', error);
    //   throw error;
    // }
    // return NextResponse.json(courses);
    return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 });
  }
}
