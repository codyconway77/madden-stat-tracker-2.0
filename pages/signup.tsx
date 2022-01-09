import { NextPage } from "next"
import { FormEventHandler, useState } from "react"
import { withSessionSsr } from "../lib/withSession"


const Signup: NextPage<any> = ({ props }) => {
    const [formData, setFormData] = useState({})
    
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            })
            console.log(formData)
        }
    
    const handleSubmit: FormEventHandler = async (event) => {
        event.preventDefault()
        await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'content-type': 'applicatin/json'
            },
            body: JSON.stringify({
                ...formData
            })
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input onChange={inputHandler} required name="username" id="username" type='text'></input>
            <label htmlFor="password">Password</label>
            <input onChange={inputHandler} required name="password" id="password" type='text'></input>
            <button type="submit">Sign Up</button>
        </form>
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

export default Signup