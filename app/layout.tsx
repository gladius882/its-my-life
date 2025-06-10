import { ReactNode } from "react";
import { Providers } from "./providers";
import { loadPlugins } from "@/core/pluginManager";
import "./globals.css"
import Navigation from "@/components/Navigation";

export default async function RootLayout({ children }: { children: ReactNode }) {

	await loadPlugins();

	return (
		<html lang="en">
			<Providers>
			<body className="flex">

				<Navigation />

				<div>
					<div>Topbar</div>

					<main>{children}</main>
				</div>
			</body>
			</Providers>
		</html>
	);
}
