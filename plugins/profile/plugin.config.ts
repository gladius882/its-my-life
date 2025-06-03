import type { PluginDefinition } from "@/core/pluginManager";

const plugin: PluginDefinition = {
	name: "plugin-profile",
	enabled: true,
	routes: {
		"/profile": () => import("./routes/profile/page"),
	},
	// api: {
	// 	"/api/profile": () => import("./api/route"),
	// },
	// hooks: () => import("./hooks"),
};

export default plugin;
