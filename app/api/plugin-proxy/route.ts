// app/api/plugin-proxy/route.ts
import { NextRequest } from "next/server";
import { findApiHandler } from "@/core/pluginManager";

export async function handler(req: NextRequest) {
    const url = new URL(req.url);
    const path = url.pathname;

    const loader = findApiHandler(path);
    if (!loader) {
        return new Response("Not found", { status: 404 });
    }

    const modul = await loader();
    return modul.default(req);
}
