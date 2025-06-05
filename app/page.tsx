"use client"

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const {data: session, status} = useSession();

  return (
    <>
      <p>
        Status: {status}
      </p>

      <Link href={'/login'}>Zaloguj</Link><br />
      <Link href={'/register'}>Utwórz konto</Link><br />
      <button onClick={() => signOut()}>Wyloguj</button>
    </>
  );
}
