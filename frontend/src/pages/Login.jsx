import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(email);
        console.log(password);

        setEmail("")
        setPassword("")

    }
    return (
        <div className='max-w-100 text-center mx-auto p-5 rounded-2xl mt-20 border'>
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

                <button type='submit' className='bg-green-600 hover:bg-green-700 p-1 rounded-md text-white'>Login</button>
            </form>
        </div>
    )
}

export default Login