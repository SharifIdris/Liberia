import { db } from './db';
import { courses } from './schema';

async function main() {
  console.log('Testing database connection...');
  try {
    const result = await db.select().from(courses).limit(1);
    if (result) {
      console.log('Database connection successful!');
      console.log('Sample data:', result);
    } else {
      console.log('Database connection successful, but no data found.');
    }
  } catch (error) {
    console.error('Database connection failed:', error);
  }
  process.exit();
}

main();
