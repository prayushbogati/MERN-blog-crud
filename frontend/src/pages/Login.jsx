import React, { useState } from 'react'
import useLogin from '../../hooks/useLogin'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const logged = await login(email, password)

        if (logged) {
            setEmail("")
            setPassword("")
        }

    }
    return (
        <div className='max-w-100 text-center mx-auto p-5 rounded-2xl mt-20 h-75 bg-slate-100'>
            <h3 className='text-2xl bold mb-5'>Login</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label><br />
                <input
                    type="text"
                    name='email'
                    id='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className='border border-gray-500 rounded-md my-2 px-2 py-1 w-70'
                /> <br />

                <label htmlFor="password">Password</label><br />
                <input
                    type="text"
                    name='password'
                    id='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className='border border-gray-500 rounded-md my-2 px-2 py-1 w-70'
                /> <br />

                <button type='submit' disabled={isLoading} className='bg-green-600 hover:bg-green-700 p-1 rounded-md text-white mt-2'>Login</button>
                {error && <div>{error}</div>}
            </form>
        </div>
    )
}

export default Login