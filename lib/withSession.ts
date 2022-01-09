import { User } from '@prisma/client'
import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next'
import { GetServerSidePropsContext, GetServerSidePropsResult, NextApiHandler } from 'next'


const sessionOptions = {
    password: {
        1: process.env.SESSION_SECRET as string
    },
    cookieName: 'stat-tracker-app-cookie',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production'
    }
}

export function withSessionRoute(handler: NextApiHandler) {
    return withIronSessionApiRoute(handler, sessionOptions)
}

export function withSessionSsr<
P extends { [key: string]: unknown } = { [key: string]: unknown },
>(handler: (
    context: GetServerSidePropsContext
    ) =>  GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>
) {
    return withIronSessionSsr(handler, sessionOptions)
}

declare module "iron-session" {
    interface IronSessionData {
      user?: Omit<User, "password" | "createdAt" | "updatedAt">
    }
  }