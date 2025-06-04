import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function RootLayout({ children }: { children: ReactNode }) {
	const session = await getServerSession(authOptions);

	if(!session) {
		return (
			<h1>Unauthorized</h1>
		)
	}

	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
