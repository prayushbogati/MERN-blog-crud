import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between mx-20 my-5 items-center'>
        <Link to="/" className='text-3xl font-bold'>CRUD</Link>
      <nav className='flex gap-10'>
        <Link to="/login" className='text-2xl'>Login</Link>
        <Link to="/signup" className='text-2xl'>Signup</Link>
      </nav>
    </div>
  )
}

export default Navbar