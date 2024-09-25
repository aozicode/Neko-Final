import React from "react";
import { Link } from "react-router-dom";
import './css/header.css';
import logo from './assets/logo/wnlogo.ico';

function Header() {
    return (
        <div className="App">
            <header className="header">
                <img src={logo} alt="House" />
                <nav className="navbar"> {/* Changed class to className */}
                    {/* Use Link for internal navigation */}
                    <Link to="/">Home</Link>
                    <Link to="/animals">Animals</Link>
                    <Link to="/About">About Us</Link>
                </nav>
            </header>
        </div>
    );
}

export default Header;