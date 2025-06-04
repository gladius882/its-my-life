import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    login: text("login").notNull().unique(),
    password: text("password").default(''),
    createdAt: timestamp("created_at").defaultNow(),
});