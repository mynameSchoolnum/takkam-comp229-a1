/*
Student Name: Tak Kam Cheng
Student Id: 301429108
Date: 26 Sep 2024
File: Navbar.js
*/

import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css';
import logo from '../assets/applogo.png'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">
          <img src={logo} alt="Logo"/>
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about-me">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
