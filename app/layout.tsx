import { ReactNode } from "react";
import { Providers } from "./providers";
import { loadPlugins } from "@/core/pluginManager";
import "./globals.css"
import Navigation from "@/components/Navigation";
import TopBar from "@/components/TopBar";
import Head from "@/components/Head";

export default async function RootLayout({ children }: { children: ReactNode }) {

	await loadPlugins();

	return (
		<html lang="en">

			<Head />

			<Providers>
				<body>

					<div id="container" className="flex flex-grow h-full min-h-screen">
						<Navigation />

						<div className="w-full">
							<TopBar />

							<main className="bg-[#F5F6FA] h-full p-5">
								{children}
							</main>
						</div>
					</div>
				</body>
			</Providers>
		</html>
	);
}
