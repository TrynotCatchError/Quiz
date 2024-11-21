import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import "./Navbar.css"; // Importing the CSS file
import logo from '/karindev-nobg.png'



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar ">
      <div className="navbar-container ">
        {/* Logo */}
        <div className="navbar-logo">
          <h2>Portfolio</h2>
          <image src={logo} />
        </div>

        {/* Desktop Menu */}
        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {/* <a href="#Homepage" className="navbar-link">
            Home
            
          </a>
          <a href="#about" className="navbar-link">
            About
          </a>
          <a href="/Blog" className="navbar-link">
          Description
          </a>
          <a href="#Projects" className="navbar-link">
            Project
          </a> */}
         
          
        </div>

        {/* Social Media Icons */}
        <div className={`navbar-icons ${menuOpen ? "open" : ""}`}>
        <a href="https://github.com/TrynotCatchError" className="navbar-icon" target="_blank">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/garin-sookkalya-a78b44324/" className="navbar-icon" target="_blank">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100036426766937&mibextid=LQQJ4d" className="navbar-icon" target="_blank">
            <FaFacebook size={20} />
          </a>
          <a href="https://x.com/so7uu35" className="navbar-icon">
            <FaTwitter size={20} />
          </a>
          <a href="https://www.instagram.com/jss_krinn/profilecard/?igsh=MTlscGt6OW81ejVzYg==" className="navbar-icon" target="_blank">
            <FaInstagram size={20} />
          </a>
         
          
          <a href="garinsookkalya@gmail.com" className="navbar-icon" >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="navbar-hamburger">
          {menuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar-mobile-menu">
          <a href="#home" className="navbar-mobile-link">
            Home
          </a>
          <a href="#about" className="navbar-mobile-link">
            About
          </a>
          <a href="#project" className="navbar-mobile-link">
            Project
          </a>
          <a href="#contact" className="navbar-mobile-link">
            Contact
          </a>
          <div className="navbar-mobile-icons">
            <a href="https://facebook.com" className="navbar-icon">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" className="navbar-icon">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" className="navbar-icon">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
