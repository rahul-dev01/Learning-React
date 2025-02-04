import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <Link to='/home'><li>Home</li></Link>
          <Link to='/login'> <li>Login</li></Link>
          <Link to='/about'><li>About</li></Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar