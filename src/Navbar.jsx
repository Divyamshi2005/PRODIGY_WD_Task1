// Navbar.js
import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = ({ onSectionChange, activeSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (e, section) => {
        e.preventDefault();
        onSectionChange(section);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <ul className="nav-menu">
                <li className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}>
                    <a href="#home" onClick={(e) => handleClick(e, 'home')}>Home</a>
                </li>
                <li className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}>
                    <a href="#about" onClick={(e) => handleClick(e, 'about')}>About</a>
                </li>
                <li className={`nav-item ${activeSection === 'services' ? 'active' : ''}`}>
                    <a href="#services" onClick={(e) => handleClick(e, 'services')}>Services</a>
                </li>
                <li className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>
                    <a href="#contact" onClick={(e) => handleClick(e, 'contact')}>Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
