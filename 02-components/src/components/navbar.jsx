import React from 'react'

const navbar = () => {
    const user = "Prince"
  return (
        <div>
            <div className="nav">
                <p>Welcome, {user}!</p>

            <div className="nav-buttons">
                <p>Home</p>
                <p>About</p>
            </div>
            </div>
        </div>
        )
    }

export default navbar;