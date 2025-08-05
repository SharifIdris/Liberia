import { db } from './db';
import * as schema from './schema';
import { getTableName, sql } from 'drizzle-orm';

async function main() {
    console.log('Resetting database...');
    const tableSchemas = Object.values(schema);
    for (const table of tableSchemas) {
        try {
            console.log(`Dropping table ${getTableName(table)}`);
            await db.execute(sql.raw(`DROP TABLE IF EXISTS "${getTableName(table)}" CASCADE`));
        } catch (error) {
            console.log(error)
        }
    }
    console.log('Database reset completed.');
    process.exit();
}

main();
