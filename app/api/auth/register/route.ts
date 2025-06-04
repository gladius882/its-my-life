import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
    const body = await req.json();
    const { login, name, password } = body;

    if (!login || !password) {
        return NextResponse.json({ error: "Brak loginu lub hasła" }, { status: 400 });
    }

    const userExists = await db.select().from(users).where(eq(users.login, login)).limit(1);
    if (userExists.length > 0) {
        return NextResponse.json({ error: "Login już istnieje" }, { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);

    await db.insert(users).values({
        login,
        name,
        password: hashed,
    });

    return NextResponse.json({ success: true });
}
