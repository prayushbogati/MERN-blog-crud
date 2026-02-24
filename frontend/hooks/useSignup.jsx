import React, { useState } from 'react'
import { UseAuthContext } from './useAuthContext'

const useSignup = () => {
    const [Error, setError] = useState(null)
    const [IsLoading, setIsLoading] = useState(null)

    const { dispatch } = UseAuthContext();

    const signup = async (email, password) => {

        const response = await fetch("http://localhost:3000/users/signup", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': "application/json"
            }
        })
        const data = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(data.err)
            return false
        }
        if (response.ok) {
            setIsLoading(false)

            localStorage.setItem('user', JSON.stringify(data))

            dispatch({ type: 'LOGIN', payload: data })

            setError(null)

            return true
        }

    }
    return { signup, Error, IsLoading }
}
export default useSignup