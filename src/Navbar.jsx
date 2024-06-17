import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            setIsVisible(true);
        }, []);


    return (

        <nav className={`navbar ${isVisible ? 'fade-in' : ''}`}>
            <div className="navbar-logo">
                <Link id='logo' to='/'>NO-BG</Link>
            </div>
            <div className="navbar-menu-icon" onClick={toggleMenu}>
                <i className='fas fa-bars'></i>
            </div>
            <ul className={`navbar-menu ${isOpen ? 'navbar-menu-open' : ''}`}>
                <li className="navbar-item">
                    <Link to='/'>Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to='/about'>About</Link>
                </li>
                <li className="navbar-item">
                    <Link to='/guide'>Guide</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;