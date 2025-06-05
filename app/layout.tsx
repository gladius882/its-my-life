import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Providers } from "./providers";
import { loadPlugins } from "@/core/pluginManager";

export default async function RootLayout({ children }: { children: ReactNode }) {

	await loadPlugins();

	return (
		<html lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
