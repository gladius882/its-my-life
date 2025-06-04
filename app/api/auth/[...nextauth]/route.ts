// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                login: { label: "Login", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.login || !credentials?.password) {
                    return null;
                }

                const userFromDb = await db
                    .select()
                    .from(users)
                    .where(eq(users.login, credentials.login))
                    .limit(1);

                const user = userFromDb[0];
                if (!user) return null;

                const passwordMatch = await bcrypt.compare(
                    credentials.password,
                    user.password
                );

                if (!passwordMatch) return null;

                return {
                    id: String(user.id),
                    name: user.login,
                };
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login", // opcjonalnie
    },
};

// Handler NextAuth, który eksportujesz do routingu
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
