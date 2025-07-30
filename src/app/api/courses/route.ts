
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data: courses, error } = await supabase.from('courses').select('*');

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    return NextResponse.json(courses);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 });
  }
}
