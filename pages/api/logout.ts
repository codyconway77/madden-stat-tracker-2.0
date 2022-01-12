import { IronSession } from "iron-session";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { withSessionRoute } from "../../lib/withSession";

export default withSessionRoute(logoutRoute)

async function logoutRoute(req: NextApiRequest, res: NextApiResponse) {
    try {
        await req.session.destroy()
        res.redirect('/login')
    } catch (error) {
        console.log(error)
    }
}