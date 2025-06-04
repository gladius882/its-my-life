import { getEnabledPlugins } from "@/core/pluginManager";
import db from "@/db";
import { users } from "@/db/schema";


export default async function PluginList() {

    const allUsers = await db.select().from(users);

    const plugins = getEnabledPlugins();
    return (
        <main className="p-4">
            <h1 className="text-xl font-bold">Pluginy</h1>
            <ul className="mt-4 space-y-2">
                {plugins.map((p) => (
                    <li key={p.name} className="p-2 rounded bg-gray-100">
                        {p.name}
                    </li>
                ))}
            </ul>

            <pre>
                {JSON.stringify(allUsers)}
            </pre>
        </main>
    );
}
