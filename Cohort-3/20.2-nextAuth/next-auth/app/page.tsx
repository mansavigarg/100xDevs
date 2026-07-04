'use client'
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
    return <div>
        <SessionProvider>
            <RealHome />
        </SessionProvider>
    </div>
}


function RealHome() {
    const session = useSession()
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            {session.status === "authenticated" && <button onClick={() => signOut()}>Logout</button>}

            {session.status === "unauthenticated" && <button onClick={() => signIn()}>Login</button>}
        </div>
    );
}