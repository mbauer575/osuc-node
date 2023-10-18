import '../styles/navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                Logo
            </div>
            <ul className="navbar-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/firstFloor">1st Floor</Link></li>
                <li><Link to="/secondFloor">2nd Floor</Link></li>
                <li><Link to="/thirdFloor">3rd Floor</Link></li>
                <li><Link to="/fourthFloor">4th Floor</Link></li>
            </ul>

        </div>
    )
}

export default Navbar