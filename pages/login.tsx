import { withSessionSsr } from '../lib/withSession'
import { NextPage } from 'next'
import { FormEventHandler, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Login: NextPage<any> = ({ props }) => {
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
        const user = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'content-type': 'applicatin/json'
            },
            body: JSON.stringify({
                ...formData
            })
        })
        if (user.status === 409 || 401) setErrors({ error: "Either username or password is incorrect!"})
        if (user.ok) {
            router.replace('/')
        }
    }
    return (
        <div className='flex flex-col w-full h-screen justify-center items-center'>
            <p className="text-red-600">{errors?.error}</p>
            <form onSubmit={handleSubmit} className='flex flex-col mb-4'>
                <label htmlFor="username" className='p-1'>Username</label>
                <input onChange={inputHandler} autoComplete='off' required minLength={3} name="username" id="username" type='text' className='p-1 outline rounded-md outline-stone-600 focus:outline-blue-600'></input>
                <label htmlFor="password" className='p-1'>Password</label>
                <input onChange={inputHandler} autoComplete='off' required minLength={6} name="password" id="password" type='password' className='p-1 outline rounded-md outline-stone-600 focus:outline-blue-600'></input>
                <button type="submit" className="outline mt-4 p-1 outline-stone-700 rounded-md hover:bg-stone-500 focus:bg-stone-500 focus:text-white shadow-md shadow-stone-700 hover:shadow-inner hover:shadow-stone-700 hover:font-semibold  hover:text-white">Login</button>
            </form>
            <p>Don&apos;t have an account? Create one <Link href='/signup'><a className='text-blue-400 focus:text-blue-600 hover:text-blue-600'>Here!</a></Link></p>
        </div>
    )
} 

export const getServerSideProps = withSessionSsr(
    async function getServerSideProps({ req }): Promise<any> {
        const user = req.session.user
        if (user) {
            return {
                redirect: {
                    destination: '/'
                },
                props: {}
            }
        }
        return {
            props: { }
        }
    }
)

export default Login
