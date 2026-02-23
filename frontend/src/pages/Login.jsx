import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label><br />
                <input
                    type="text"
                    name='email'
                    id='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <label htmlFor="password">Password</label><br />
                <input
                    type="text"
                    name='password'
                    id='password'
                    onChange={(e) => setEmail(e.target.value)}
                    value={password}
                />

                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login