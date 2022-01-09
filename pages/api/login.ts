import { withSessionRoute } from "../../lib/withSession";
import bcrypt from 'bcryptjs'
import { prisma } from '../../lib/prismaClient'
import { User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default withSessionRoute(loginRoute)

async function loginRoute(req: any, res: NextApiResponse) {
    const body = JSON.parse(req.body)
    const { username, password } = body
    try {
        const getUserHashedPassword: Omit<User, "createdAt" | "updatedAt" | "games" | "teams"> | null = await prisma.user.findFirst({
            where: {
                userName: username
            },
            select: {
                id: true,
                userName: true,
                hashedPassword: true
            }
        })
        if (getUserHashedPassword === null) throw console.error('No user with that username exists');
        const passwordMatch = await bcrypt.compare(password, getUserHashedPassword.hashedPassword)
        if (passwordMatch) {
            req.session.user = {
                id: getUserHashedPassword.id,
                userName: getUserHashedPassword.userName
            }
            await req.session.save()
            await res.json({message: "Login successful"})
        } else res.json({ message: "Password does not match" })
    } catch(error) {
        console.log(error)
    }
}