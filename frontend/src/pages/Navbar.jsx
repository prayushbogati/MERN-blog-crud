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
    <div className='flex justify-between mx-20 my-5 items-center'>
      <Link to="/" className='text-3xl font-bold cursor-pointer'>CRUD</Link>

      {user && (<div className='flex gap-5 items-center'>
        <span className='block'>{user.email}</span>
        <button onClick={handleClick} className='text-2xl cursor-pointer'>Logout</button>
      </div>)}

      {!user && (<nav className='flex gap-10'>
        <Link to="/login" className='text-2xl cursor-pointer'>Login</Link>
        <Link to="/signup" className='text-2xl cursor-pointer'>Signup</Link>
      </nav>)}

    </div>
  )
}

export default Navbar