import React from "react";
import { Link, useLocation } from "react-router-dom";
import './css/header.css';
import logo from './assets/logo/wnlogo.ico';

function Header() {
    const location = useLocation();

    // Helper function to check if the link is active
    const isActive = (path) => location.pathname === path;
    return (
        <div className="App">
            <header className="header">
                <img src={logo} alt="House" />
                <nav className="navbar"> {/* Changed class to className */}
                    {/* Use Link for internal navigation */}
                    <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
                    <Link to="/animals" className={isActive("/animals") ? "active" : ""}>Animals</Link>
                    <Link to="/about" className={isActive("/about") ? "active" : ""}>About Us</Link>
                </nav>
            </header>
        </div>
    );
}

export default Header;