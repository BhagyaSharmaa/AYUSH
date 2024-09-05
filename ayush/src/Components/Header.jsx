// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Ensure the path is correct

function Header() {
  return (
    <header className="header-container">
      <div className="header-bg">
        <h1 className="header-title">Ayush</h1>
        <nav className="header-nav">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/register" className="nav-link">Register</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
