import { useState } from 'react';
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <a className="titleNavbar" href="/">
                Thomas Pratama
            </a>

            <div className={`navbar-links ${isOpen ? "open" : ""}`}>
                <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
                <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </div>

            <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    );
}

export default Navbar;
