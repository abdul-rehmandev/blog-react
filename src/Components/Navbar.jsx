import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ NavLink }) => {
    return (
        <div className="container navbar-container">
            <div className="left">
                <Link to="/" className='link'>
                    <img src="/Images/logo.png" alt="blaager-logo" />
                </Link>
            </div>
            <div className="right">
                <Link to="/" className={`link ${NavLink == 1 ? "active" : ""}`}>Home</Link>
                <Link to="/" className='link'>Explore categories</Link>
                <Link to="/" className='link'>Contact us</Link>
                <Link to="/"><img width="30" height="30" src="https://img.icons8.com/ios/30/user-male-circle--v1.png" alt="user-male-circle--v1" /></Link>
            </div>
        </div>
    )
}

export default Navbar