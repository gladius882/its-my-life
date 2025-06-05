import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicPaths = ["/", "/login", "/register"];

export default withAuth(
  function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // Jeśli ścieżka jest publiczna, przepuść
    if (publicPaths.includes(pathname)) {
      return NextResponse.next();
    }

    // W przeciwnym razie withAuth sprawdzi sesję
    // (Jeśli sesji nie ma — automatycznie przekieruje na login)
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;
        if (publicPaths.includes(pathname)) {
          return true; // strona publiczna — nie wymaga tokena
        }
        return !!token; // strona prywatna — wymagany token (czyli zalogowany użytkownik)
      },
    },
    pages: {
      signIn: "/login", // Dokąd przekierować niezalogowanych
    },
  }
);
