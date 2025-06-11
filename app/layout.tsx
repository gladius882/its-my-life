import { ReactNode } from "react";
import { Providers } from "./providers";
import { loadPlugins } from "@/core/pluginManager";
import "./globals.css"
import Navigation from "@/components/Navigation";
import TopBar from "@/components/TopBar";

export default async function RootLayout({ children }: { children: ReactNode }) {

	await loadPlugins();

	return (
		<html lang="en">
			<Providers>
				<body>

					<div id="container" className="flex flex-grow">
						<Navigation />

						<div className="w-full">
							<TopBar />

							<main className="bg-[#F5F6FA]">
								{children}
							</main>
						</div>
					</div>
				</body>
			</Providers>
		</html>
	);
}
