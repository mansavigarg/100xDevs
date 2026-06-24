// //this is a client component because it uses useEffect and useState, which are React hooks that can only be used in client components. The "use client" directive at the top of the file indicates that this component should be rendered on the client side.
// "use client"

// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function User() {
//     const [loading, setLoading] = useState(true)
//     const [data, setData] = useState<{ name: string; email: string } | null>(null)

//     useEffect(() => {
//         axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
//             .then((response) => {
//                 setData(response.data)
//                 setLoading(false)
//             })
//     }, [])

//     if(loading){
//         return <div>
//             Loading .....
//         </div>
//     }

//     return <div>
//         {data?.name}
//         {data?.email}
//     </div>
// }



// // server component
import axios from "axios";

export default async function User() {
    const response = await axios.get("http://localhost:3000/api/v1/user/details")


    const data = response.data

    return <div>
        {data.name}
        <br />
        {data.email}
    </div>
}