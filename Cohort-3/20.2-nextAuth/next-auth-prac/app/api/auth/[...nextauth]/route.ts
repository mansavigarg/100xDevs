import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "email",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "sample@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
                const username = credentials?.username
                const password = credentials?.password
                
                // db request to check if this username and password are correct

                // making a dummy user here
                const user = {
                    name: "manu",
                    id: "1",
                    email: "manu@gmail.com"
                }

                if(user) return user
                else return null
            }
        }),
        GoogleProvider({
            clientId: "asd",
            clientSecret: "asd"
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export {handler as GET, handler as POST }