// import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-logo">
                <Link to='home'><sup>Trust<sub>Cure</sub></sup></Link>
            </div>
            <div className="navbar-elements">
                <ul>
                    <li>
                        <Link to='/feedback'>Feedback</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar