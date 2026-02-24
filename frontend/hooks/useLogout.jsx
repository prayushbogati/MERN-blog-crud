import { UseAuthContext } from "./useAuthContext"

const useLogout = () => {
    const { dispatch } = UseAuthContext()

    const logout = () => {
        localStorage.removeItem('user')
        dispatch({ type: 'LOGOUT' })
    }
    return {logout}
}

export default useLogout