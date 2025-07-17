import React from 'react';
import logo from '../assets/logo.svg';

const Header = ({ onNavigate }) => {
  const navLinks = [
    { id: 'home', label: 'Accueil' },
    { id: 'festivals', label: 'Festivals' },
    { id: 'artistes', label: 'Artistes' },
    { id: 'contact', label: 'Contact' },
  ];
  return (
    <header className="site-header">
      <nav className="navbar">
        {/* Logo */}
        <a href="/" className="logo">
          <img src={logo} alt="GrooveNomad Logo" className="logo-img" />
          <span className="logo-text">GrooveNomad</span>
        </a>

        {/* Navigation */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button onClick={() => onNavigate(link.id)} className="nav-item">
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Connexion */}
        <div className="nav-actions">
          <a href="/login" className="login-button">
            Se connecter
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
