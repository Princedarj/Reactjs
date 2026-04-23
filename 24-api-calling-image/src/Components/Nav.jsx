import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div className='navbar'>
        <h1>User</h1>

        <div className='btn'>
            <Link to={'/'} className="active:scale-95">Home</Link>
            <Link to={'/adduser'} className="active:scale-95">Add User</Link>
            <Link to={'/userlist'} className="active:scale-95">User List</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav