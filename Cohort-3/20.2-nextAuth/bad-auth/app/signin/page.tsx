"use client"
import axios from "axios"

export default function() {
    return <div>
        Sign in page <br />
        <input className=" bg-amber-200 text-black" placeholder="password"></input>
        <br />
        <input className=" bg-amber-200 text-black" placeholder="password"></input>
        <br />
        <button onClick={async () => {
            const res = await axios.post("http://localhost:3000/api/signin", {
                username : "asd",
                password : "asdasd"
            })
            localStorage.setItem("token", res.data.token)
        }}> Sign in</button>
    </div>
} 