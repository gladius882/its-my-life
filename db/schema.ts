import { pgTable, pgEnum, serial, text, timestamp, integer, boolean } from "drizzle-orm/pg-core";

export const pluginStateEnum = pgEnum("pluginState", ["installed", "uninstalled"])

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    login: text("login").notNull().unique(),
    password: text("password").default(''),
    createdAt: timestamp("created_at").defaultNow(),
});

export const plugins = pgTable("plugins", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    enabled: boolean("enabled").default(false),
    displayName: text("display_name").notNull(),
    state: pluginStateEnum().default("uninstalled"),
})

export const pluginsRoutes = pgTable("plugins_routes", {
    id: serial("id").primaryKey(),
    route: text("route").notNull(),
    component: text("component").notNull(),
})

export const hooks = pgTable("hooks", {
    id: serial("id").primaryKey(),
    name: text("name").notNull()
})

export const hooksCallback = pgTable("hooks_callback", {
    id: serial("id").primaryKey(),
    hook_id: integer("hook_id"),
    plugin_id: integer("plugin_id"),
})