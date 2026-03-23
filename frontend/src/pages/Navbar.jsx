import { Link } from 'react-router-dom'
import useLogout from '../../hooks/useLogout'
import { UseAuthContext } from '../../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = UseAuthContext()

  const handleClick = () => {
    logout()
  }
  return (
    <div className="bg-white shadow-md px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">

      <Link to="/" className="text-2xl font-bold text-green-600">
        Blog App
      </Link>

      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">{user.email}</span>
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <Link className="hover:text-green-600" to="/login">Login</Link>
          <Link className="hover:text-green-600" to="/signup">Signup</Link>
        </div>
      )}
    </div>
  )
}

export default Navbar