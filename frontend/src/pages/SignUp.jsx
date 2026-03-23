import React, { useState } from 'react'
import useSignup from '../../hooks/useSignup'

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { signup, error, isLoading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const signed = await signup(email, password)

        if (signed) {
            setEmail("")
            setPassword("")
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="text-sm">Email</label><br />
                    <input type="text" name='email' id='email' onChange={(e) => setEmail(e.target.value)} value={email} className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <label className="text-sm">Password</label><br />
                    <input type="password" name='password' id='password' onChange={(e) => setPassword(e.target.value)} value={password} className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
                    >
                        {isLoading ? "Loading..." : "Signup"}
                    </button>

                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                </form>
            </div>
        </div>
    )
}

export default Signup