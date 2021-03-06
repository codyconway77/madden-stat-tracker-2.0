import { NextPage } from "next"
import { useRouter } from "next/router"
import Link from "next/link"
import { FormEventHandler, useState } from "react"
import { withSessionSsr } from "../lib/withSession"

const Signup: NextPage<any> = ({ props }) => {
    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState<any>({})
    const router = useRouter()
    
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            })
        }
    
    const handleSubmit: FormEventHandler = async (event) => {
        event.preventDefault()
        
            const newUser = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'content-type': 'applicatin/json'
                },
                body: JSON.stringify({
                    ...formData
                })
            })
            if (newUser.status === 400) {
                setErrors({ error: "Username already exists"})
            }
            if (newUser.ok) {
                router.push('/')
            }
        
    }
    return (
        <div className='flex flex-col w-full h-screen justify-center items-center'>
            <p className="text-red-600">{errors?.error}</p>
            <form onSubmit={handleSubmit} className="flex flex-col mb-4">
                <label htmlFor="username" className="p-1">Username</label>
                <input onChange={inputHandler} autoComplete='off' required minLength={3} name="username" id="username" type='text' className='p-1 outline rounded-md outline-stone-600 focus:outline-blue-600'></input>
                <label htmlFor="password" className="p-1">Password</label>
                <input onChange={inputHandler} autoComplete='off' required minLength={6} maxLength={18} name="password" id="password" type='text' className='p-1 outline rounded-md outline-stone-600 focus:outline-blue-600'></input>
                <button type="submit" className="outline mt-4 p-1 outline-stone-700 rounded-md hover:bg-stone-500 focus:bg-stone-500 focus:text-white shadow-md shadow-stone-700 hover:shadow-inner hover:shadow-stone-700 hover:font-semibold  hover:text-white">Sign Up</button>
            </form>
            <p>Already have an account? <Link href='/login'><a className='text-blue-400 focus:text-blue-600 hover:text-blue-600'>Login</a></Link></p>
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

export default Signup