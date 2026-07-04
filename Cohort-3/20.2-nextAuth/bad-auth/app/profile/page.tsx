// 'use client'
// import axios from "axios"
// import { useEffect, useState } from "react"

// export default function Profile(){
//     const [profilePicture, setProfilePicture] = useState("")

//     useEffect(() => {
//         axios.get("http://localhost:3000/api/profile", {
//             headers: {
//                 authorization : localStorage.getItem("token")
//             }
//         }).then(res => {
//             setProfilePicture(res.data.avatarURL)
//         })
        
//     },[])

//     return <div>
//         {profilePicture}
//     </div>
// }



// here i am not getting the benefits of ssr, as the profile is rendered on the client side
// the browser here calls the api to get the images url
// first a blank page will be rendered on the browser, then the axios call will happen in the browser and then will the avatarURL will be rendered
// this is a bad way

// this is why localstorage is not enough




//# This is the write way to do server side rendering 
import axios from "axios"

export default async function Profile(){

        const res = await axios.get("http://localhost:3000/api/profile", {
            headers: {
                authorization : localStorage.getItem("token")
            }
        })
        const profilePicture = res.data.avatarURL
        

    return <div>
        {profilePicture}
    </div>
}

// here the rendering is happening on the server side, so server will not have access to the localstorage, so we will get an error

// so in the first request of send the /profile request, the server will not have access to the localstorage, so we will get an error
// even if we want to send the token in the headers, we will not be able to do that, as the server will not have access to the localstorage, we cannot send headers in the url