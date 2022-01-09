import { withSessionSsr } from '../lib/withSession'
import { NextPage } from 'next'

const Login: NextPage<any> = ({ props }) => {
    return (
        <div className='grid grid-rows-12 grid-cols-12 w-screen h-screen overflow-hidden bg-stone-800'>
            {props?.isLoggedIn ? props.isLoggedIn : "Not logged in"}
        </div>
    )
} 

export const getServerSideProps = withSessionSsr(
    async function getServerSideProps({ req }) {
        const user = req.session.user
        if (user) {
            redirect: {
                location: '/'
            }
        }
        return {
            props: {
                isLoggedIn: false
            }
        }
    }
)

export default Login
