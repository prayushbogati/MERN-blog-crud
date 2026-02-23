import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import { BlogContextProvider } from '../context/BlogContext.jsx'
import { authContextProvider } from '../context/authContext.jsx'
// import BrowserRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <authContextProvider>

      <BlogContextProvider>

        <Home />

      </BlogContextProvider>

    </authContextProvider>
  </StrictMode>,
)
