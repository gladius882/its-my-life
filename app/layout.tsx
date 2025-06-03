import { loadPlugins } from "@/core/pluginManager";
import { ReactNode } from "react";

export default async function RootLayout({ children }: { children: ReactNode }) {
  await loadPlugins();
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
