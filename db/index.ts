import { drizzle } from "drizzle-orm/node-postgres"

export const connectionString = ``;

const db = drizzle(process.env.DATABASE_URL);

export default db;