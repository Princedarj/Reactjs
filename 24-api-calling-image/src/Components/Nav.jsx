import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div className='navbar'>
        <h1>User</h1>

        <div className='btn'>
            <Link to={'/'} className="link">Home</Link>
            <Link to={'/login'} className="link">Login</Link>
            <Link to={'/register'} className="link">Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav