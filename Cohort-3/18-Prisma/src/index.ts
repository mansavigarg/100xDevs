import express from "express";
import { prisma } from "./prisma.js";

const app = express();

app.get("/", async (req, res) => {
    const user = await prisma.user.findMany();
    res.json({user});
});


async function main() {
        const user = await prisma.user.findFirst({
            where: {
                email: "sample@gmail.com"
            },
            include: {
                todo: true
            }
        })
        console.log(user);
}

main();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});