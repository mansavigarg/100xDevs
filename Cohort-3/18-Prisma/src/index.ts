import { PrismaClient } from "@prisma/client/extension"


const client = new PrismaClient();


const createUser = async () => {
    await client.user.create({
        data: {
            name: "harkirat",
            email: "manu@gmail.com",
            password: "2343",
            city: "afv"
        }
    })
}

const users = async () => {
    const user = await client.user.findFirst({
        where: {
            id: 1
        },
        include: {
            todos: true
        }
    })
}

createUser()

