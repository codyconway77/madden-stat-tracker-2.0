import { withSessionRoute } from "../../lib/withSession";
import bcrypt from 'bcryptjs'
import { prisma } from '../../lib/prismaClient'
import { NextApiRequest, NextApiResponse } from "next";

export default withSessionRoute(signupRoute)

async function signupRoute(req: NextApiRequest, res: NextApiResponse) {
    const body = JSON.parse(req.body)
    const { username, password } = body

    try {
        const salt = await bcrypt.genSalt()
        const hashed = await bcrypt.hash(password, salt)
    
        const findUser = await prisma.user.create({
            data: {
                userName: username,
                hashedPassword: hashed
            },
        })
        if (!findUser) {
            res.json({ message: "An error occured with creating the user"})
        }
        res.json({ message: "User successfully created!" })
    } catch(error) {
        console.log(error)
    }
}