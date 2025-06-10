import PluginTile from "@/components/PluginTile";
import { getEnabledPlugins } from "@/core/pluginManager";
import db from "@/db";


export default async function PluginList() {

    const plugins = await getEnabledPlugins();

    console.log(plugins);


    return (
        <main className="p-4">
            <h1 className="text-xl font-bold">Pluginy</h1>
                {plugins.map((p) => (
                    <PluginTile name={p.name} enabled={p.enabled} />
                ))}

            
        </main>
    );
}
