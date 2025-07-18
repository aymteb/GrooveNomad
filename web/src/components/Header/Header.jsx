'use client';

/* global document */

import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/logo.svg';
import './Header.css';
import TranslationWrapper from '../../services/TranslationWrapper';

const ChevronDownIcon = () => (
  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const MessageCircleIcon = () => (
  <svg
    className="icon-large"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

const FileTextIcon = () => (
  <svg
    className="icon-large"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    className="icon-large"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const HeartIcon = () => (
  <svg
    className="icon-large"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    className="icon-user"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

export default function FestivalWebsite({ onNavigate }) {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const languageRef = useRef(null);
  const userRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
      if (userRef.current && !userRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { icon: MessageCircleIcon, text: 'MES CONVERSATIONS' },
    { icon: FileTextIcon, text: 'MES DEVIS' },
    { icon: CalendarIcon, text: 'MES RÉSERVATIONS' },
    { icon: HeartIcon, text: 'MES FAVORIS' },
    { icon: UserIcon, text: 'MON PROFIL' },
  ];

  return (
    <div className="festival-container">
      <header className="main-header">
        <div className="header-content">
          <div className="logo-nav-section">
            <div className="logo-container">
              <img
                src={logo}
                alt="Festival Logo"
                className="logo"
                onClick={() => onNavigate('home')}
              />
            </div>
            <nav className="main-nav">
              <button onClick={() => onNavigate('home')} className="nav-link">
                <TranslationWrapper>ACCUEIL</TranslationWrapper>
              </button>
              <button
                onClick={() => onNavigate('festivals')}
                className="nav-link"
              >
                <TranslationWrapper>FESTIVALS</TranslationWrapper>
              </button>
              <button
                onClick={() => onNavigate('AboutUs')}
                className="nav-link"
              >
                <TranslationWrapper>QUI SOMMES-NOUS</TranslationWrapper>
              </button>
              <div className="dropdown" ref={languageRef}>
                <button
                  onClick={() =>
                    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                  }
                  className="dropdown-trigger"
                >
                  FR
                  <ChevronDownIcon />
                </button>
                {isLanguageDropdownOpen && (
                  <div className="dropdown-menu">
                    <button className="dropdown-item">Français</button>
                    <button className="dropdown-item">English</button>
                  </div>
                )}
              </div>
            </nav>
          </div>
          <div className="user-section" ref={userRef}>
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="user-trigger"
            >
              <UserIcon />
              <span style={{ width: 'max-content' }}>LILIAN SEVRE</span>
              <ChevronDownIcon />
            </button>
            {isUserMenuOpen && (
              <div className="user-menu">
                {menuItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <button key={index} className="user-menu-item">
                      <div className="user-menu-icon">
                        <IconComponent />
                      </div>
                      <span className="user-menu-text">{item.text}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
