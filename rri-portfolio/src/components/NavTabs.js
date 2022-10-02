import React from 'react';
import '../styles/style.css'

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="navbar">
      <li className="navbar-items">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'active-nav' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="navbar-items">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'active-nav' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="navbar-items">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'active-nav' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="navbar-items">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'active-nav' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
