import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <ScrollLink to="home" className="navbar-brand" smooth={true} duration={500} offset={-50}>
          Manish Mishra
        </ScrollLink>
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <ScrollLink
            to="home"
            className="nav-link"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={handleLinkClick}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            className="nav-link"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={handleLinkClick}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="myskill"
            className="nav-link"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={handleLinkClick}
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="education"
            className="nav-link"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={handleLinkClick}
          >
            Education
          </ScrollLink>
          <ScrollLink
            to="contact"
            className="nav-link"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={handleLinkClick}
          >
            Contact
          </ScrollLink>
        </div>
        <div className="hamburger" onClick={toggleMenu} >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
