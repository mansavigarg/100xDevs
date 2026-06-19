import { prisma } from "./db.js";

async function main() {
        const user = await prisma.user.create({
            data: {
                email: "manu@gmail.com",
                name: "Manu",
            }
        })
        console.log(user);
}

main();