import { withSessionRoute } from "../../lib/withSession";
import bcrypt from 'bcryptjs'
import { prisma } from '../../lib/prismaClient'
import { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";

export default withSessionRoute(signupRoute)

async function signupRoute(req: NextApiRequest, res: NextApiResponse) {
    const body = JSON.parse(req.body)
    const { username, password } = body
    if (username.length < 3) {
        res.status(400).send({ error: 'Username must be atleast 3 characters long'})
    }
    if (password.length < 6) {
        res.status(400).send({ error: 'Password must be atleast 6 characters long'})
    }

    const salt = await bcrypt.genSalt()
    const hashed = await bcrypt.hash(password, salt)

    try {
        const findUser = await prisma.user.create({
            data: {
                userName: username,
                hashedPassword: hashed
            },
        })
        res.status(201).json({ message: "User successfully created!" })
    } catch(error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                res.status(400).json(error.message)
            }
        }
    }
}