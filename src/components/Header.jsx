import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
  <header className="site-header">
    <nav className="navbar">
      <Link to="/" className="navbar-brand">FitMo</Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
