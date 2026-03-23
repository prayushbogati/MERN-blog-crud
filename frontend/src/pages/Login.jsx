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
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-sm">Email</label>
                        <input
                            type="email"
                            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="text-sm">Password</label>
                        <input
                            type="password"
                            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        disabled={isLoading}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
                    >
                        {isLoading ? "Loading..." : "Login"}
                    </button>

                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                </form>
            </div>
        </div>
    )
}

export default Login