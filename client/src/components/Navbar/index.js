import React from 'react';
import Button from '../button';
import './style.css';

function Navbar() {
  return (
    <nav className="navbar is-fixed-top is-spaced has-shadow">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          Logo
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          {/* <Button>Log in</Button> */}
          <Button link="/login">Login</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
