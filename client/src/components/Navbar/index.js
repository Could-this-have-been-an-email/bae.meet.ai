import React from 'react';
import Button from '../button';
import './style.css';

function Navbar() {
  return (
    <nav className="navbar is-fixed-top has-shadow">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          logo
        </a>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <a href="/login" className="button is-link">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
