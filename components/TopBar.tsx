"use client"

import { signOut, useSession } from "next-auth/react";

const TopBar = () => {
    const { data: session, status } = useSession();

    return (
        <div className="flex justify-between h-13 p-5">

            <div className="flex flex-col justify-center">
                Status: {status}<br/>
                {session?.user?.name}
            </div>

            <div className="w-50 flex flex-col justify-center w-100">
                <input type="text" placeholder="Szukaj" className="border w-full p-2 rounded-lg border-gray-500"/>
            </div>

            <div className="flex flex-col justify-center">
                <button onClick={() => signOut()} className="border p-2 hover:bg-[#4880FF]">
                    Wyloguj
                </button>
            </div>

        </div>
    )
}

export default TopBar;