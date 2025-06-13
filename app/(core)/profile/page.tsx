"use client"

import { useSession } from "next-auth/react";

const ProfilePage = () => {
    const { data: session } = useSession();

    return (
        <div className="flex justify-center">
            <div className="w-2/3 flex flex-col gap-4">

                <div>
                    <label>Login</label>
                    <input type="text" value={session?.user?.name || ""} className="border w-full p-2 rounded-lg border-gray-500" />
                </div>

                <div>
                    <label>Login</label>
                    <input type="text" value={session?.user?.name || ""} className="border w-full p-2 rounded-lg border-gray-500" />
                </div>

            </div>
        </div>
    )
}

export default ProfilePage;