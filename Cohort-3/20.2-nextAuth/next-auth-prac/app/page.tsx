// 'use client'
// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
// import Image from "next/image";



// export default function Home() {
//     return <div>
//         <SessionProvider>
//             <RealHome />
//         </SessionProvider>
//     </div>
// }


// function RealHome() {
//     const session = useSession()
//     return (
//         <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//             {session.status === "authenticated" && <button onClick={() => signOut()}>Logout</button>}

//             {session.status === "unauthenticated" && <button onClick={() => signIn()}>Login</button>}
//         </div>
//     );
// }

// ! Here still the problem is that the session is being fetched on the client side, and if need to fetch something then we have to use useeEffect here and it will render on the client side, so we will not get the benefits of SSR, 
// in this approach the first request that is send return empty page and then session will check if use is authenticated or not then only it will show the divs in the subsequent request 


//@ so we will have to use useServerSession which works on the server side and we can fetch the session on the server side and then render it on the client side










// getServerSession - which works on the server side, and useSession works on the client side

import { getServerSession } from "next-auth";



export default async function Home() {
    const session = await getServerSession();
    return <div>
        {JSON.stringify(session)}
    </div>
}


// now this gives a pre-rendered session form the server using the getServerSession hook 
// most of the this is what we are going to use for getting pre-redered data from the server
