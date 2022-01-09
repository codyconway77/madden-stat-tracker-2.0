import { NextPage } from "next"
import { withSessionSsr } from "../lib/withSession"

const Me: NextPage<any> = ({ user }) => {
    if (user) {
        return (
            <div>
                <h2>You are:</h2>
                <div>{user.userName}</div>
                <h2>Your ID is:</h2>
                <div>{user.id}</div>
            </div>
        )
    }
    return (
        <>Loading...</>
    )
}

export const getServerSideProps = withSessionSsr(
    async function getServerSideProps({ req }) {
        const user = req.session.user
        if (!user) {
            redirect: {
                location: '/login'
            }
        }
        return {
            props: {
                user: req.session.user
            }
        }
    }
)

export default Me