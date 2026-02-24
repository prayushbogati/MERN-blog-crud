import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BlogContextProvider } from '../context/BlogContext.jsx'
import { AuthContextProvider } from '../context/authContext.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Navbar from './pages/Navbar.jsx'

  createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>

      <AuthContextProvider>

        <BlogContextProvider>

          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>

        </BlogContextProvider>

      </AuthContextProvider>

    </BrowserRouter>
  </StrictMode>,
)
