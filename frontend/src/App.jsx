import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Navbar from './pages/Navbar.jsx'
import { UseAuthContext } from "../hooks/useAuthContext.jsx"
import { Navigate } from "react-router-dom"

const App = () => {

  const { user } = UseAuthContext()

  return (
    <BrowserRouter>

      <Navbar />

      <div>
        <Routes>
          <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
          <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
          <Route path='/signup' element={!user ? <SignUp /> : <Navigate to='/' />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App