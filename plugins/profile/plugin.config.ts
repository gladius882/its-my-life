import type { PluginDefinition } from "@/core/pluginManager";

const definition: PluginDefinition = {
	name: "plugin-profile",
	enabled: true,
	routes: {}
	// routes: {
	// 	"/profile": () => import("./routes/profile/page"),
	// 	"/profile/preferences": () => import('./routes/preferences/page')
	// },
	// api: {
	// 	"/api/profile": () => import("./api/route"),
	// },
	// hooks: () => import("./hooks"),
};


export const install = () => {

}

export const uninstall = () => {

}

export default definition;
