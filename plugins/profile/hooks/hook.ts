import { registerHook } from "@/core/hookRegistry";

export default function register() {
  registerHook("onPluginLoad", () => {
    console.log("Plugin A loaded!");
  });
}
