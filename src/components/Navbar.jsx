import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink 
        to="/" 
        className="w-48 h-12 rounded-full bg-white flex items-center justify-center shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
        <p className="blue-gradient_text text-lg font-semibold tracking-tight">
            🌀 𝟑𝑫 𝓘𝓼𝓵𝓪𝓷𝓭 🌀
        </p>
        </NavLink>

        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar