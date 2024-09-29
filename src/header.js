import React from "react";
import { NavLink } from "react-router-dom";
import './css/header.css';
import logo from './assets/logo/wnlogo.ico';

const isActive = (match, location) => {
    return match ? true : false; // Adjust logic as needed
};

function Header() {
    return (
        <div className="App">
            <header className="header">
                <img src={logo} alt="House" />
                <nav className="navbar">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink>
                    <NavLink to="/animals" className={({ isActive }) => (isActive ? "active-link" : "")}>Animals</NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>About Us</NavLink>
                </nav>
            </header>
        </div>
    );
}

export default Header;