import fs from "fs";
import path from "path";

export type PluginDefinition = {
  name: string;
  enabled: boolean;
  routes: Record<string, () => Promise<any>>;
  api: Record<string, () => Promise<any>>;
  hooks?: () => Promise<any>;
};

let plugins: PluginDefinition[] = [];

export async function loadPlugins() {
  const pluginsDir = path.join(process.cwd(), "plugins");
  const folders = fs.readdirSync(pluginsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  plugins = await Promise.all(
    folders.map(async (folder) => {
      const pluginConfigPath = path.join(pluginsDir, folder, "plugin.config.ts");

      // Dynamiczny import pliku konfiguracyjnego pluginu
      const plugin: PluginDefinition = (await import(`@/plugins/${folder}/plugin.config`)).default;
      return plugin;
    })
  );
}

export function getEnabledPlugins() {
  return plugins.filter(p => p.enabled);
}

export function findPageComponent(pathname: string) {
  for (const plugin of getEnabledPlugins()) {
    if (plugin.routes[pathname]) return plugin.routes[pathname];
  }
  return null;
}

export function findApiHandler(pathname: string) {
  for (const plugin of getEnabledPlugins()) {
    if (plugin.api[pathname]) return plugin.api[pathname];
  }
  return null;
}
