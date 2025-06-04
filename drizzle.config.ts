import type { Config } from "drizzle-kit";

export default {
    schema: "./db/schema.ts",
    dialect: "postgresql",
    out: "./drizzle", 
    dbCredentials: {
        host: "localhost",
        port: 5433,
        database: "postgres",
        user: "postgres",
        password: "postgres",
        ssl: false
    },
} satisfies Config;