import React from "react";
import logo from "../assets/logo.svg";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/festivals", label: "Festivals" },
  { href: "/artistes", label: "Artistes" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
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
            <li key={link.href}>
              <a href={link.href} className="nav-item">
                {link.label}
              </a>
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
