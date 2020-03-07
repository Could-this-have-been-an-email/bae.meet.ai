import React from 'react';

import Logo from '../../assets/img/baelogo2.png';
import './style.css';

function Navbar() {
  return (
    <nav
      class="navbar is-black is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src={Logo} width="50" />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <a href="/login" class="button is-danger">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
    // <nav className="navbar is-fixed-top has-shadow">
    //   <div className="navbar-brand">
    //     <a className="navbar-item" href="/">
    //       <img src={Logo} height="28" width="28" />
    //     </a>

    //     <a
    //       role="button"
    //       className="navbar-burger burger"
    //       aria-label="menu"
    //       aria-expanded="false"
    //     >
    //       <span aria-hidden="true"></span>
    //       <span aria-hidden="true"></span>
    //       <span aria-hidden="true"></span>
    //     </a>
    //   </div>

    //   <div className="navbar-end">
    //     <div className="navbar-item">
    //       <a href="/login" className="button is-link">
    //         Login
    //       </a>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Navbar;
