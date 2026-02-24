import React, { useState } from 'react'
import { UseAuthContext } from './useAuthContext'

const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const { dispatch } = UseAuthContext();

    const login = async (email, password) => {

        const response = await fetch("http://localhost:3000/users/login", {
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
    return { login, error, isLoading }
}
export default useLogin