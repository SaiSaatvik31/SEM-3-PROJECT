// import React from 'react'

import { Link } from 'react-router-dom'
import '../styles/home.css'

function Home() {
  return (
    <div className="home-container">
        
        <Link to='book-appointment'>
        <button>BOOK APPOINTMENT</button>
        </Link>
    </div>
  )
}

export default Home