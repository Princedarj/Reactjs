import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)} 
      className="dropdown-btn">
        Login
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li><Link to="/login">
          Login</Link></li>
          <li><Link to="/profile">
          Profile</Link></li>
          <li><Link to="/logout">
          Logout</Link></li>
        </ul>
      )}
    </div>
  )
}

export default Dropdown
