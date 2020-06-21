import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ location }) => {

    let pathname = '';

    if (location.pathname !== '/') {
        pathname = 'Profiles'
    }

    return (
        <nav className="navbar">
            <h1>
                <Link to="/">{pathname}</Link>
            </h1>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
    )
}

export default Navbar
