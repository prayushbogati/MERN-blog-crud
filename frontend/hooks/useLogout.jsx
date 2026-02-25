import { UseAuthContext } from "./useAuthContext"
import { useBlogContext } from "./useBlogContext"

const useLogout = () => {
    const { dispatch } = UseAuthContext()
    const { dispatch: blogDispatch } = useBlogContext()

    const logout = () => {
        localStorage.removeItem('user')
        dispatch({ type: 'LOGOUT' })
        dispatch({ type: 'SET_BLOGS', payload: null })
    }
    return { logout }
}

export default useLogout