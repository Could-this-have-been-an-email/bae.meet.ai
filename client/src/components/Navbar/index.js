import React, { useState } from 'react';
import Logo from '../../assets/img/baelogo2.png';
import './style.css';

function Navbar() {
  const [isActive, setisActive] = useState(false);
  return (
    <nav
      className="navbar is-black is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={Logo} width="50" alt="logo" />
        </a>

        <a
          onClick={() => {
            setisActive(!isActive);
          }}
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <div className="navbar-item flex justify-end">
            <a href="/login" className="button is-danger">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
