import { getEnabledPlugins } from "@/core/pluginManager";

export default function PluginList() {
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
        </main>
    );
}
