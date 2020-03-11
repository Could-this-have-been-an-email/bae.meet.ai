import React, { useState, useEffect } from 'react';
import Logo from '../../assets/img/baelogo2.png';
import './style.css';

function Navbar() {
  const [isActive, setisActive] = useState(false);
  const [logout, setLogout] = useState(true);

  var full_url = document.URL; // Get current url
  var url_array = full_url.split('/'); // Split the string into an array with / as separator

  useEffect(() => {
    if (
      url_array[3] === 'user' ||
      url_array[3] === 'meeting' ||
      url_array[3] === 'newmeeting'
    ) {
      setLogout(false);
    }
  });

  return (
    <nav
      className="navbar has-shadow is-fixed-top"
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
            <a href={logout ? '/login' : '/'} className="button is-warning">
              {logout ? 'Login' : 'Logout'}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
