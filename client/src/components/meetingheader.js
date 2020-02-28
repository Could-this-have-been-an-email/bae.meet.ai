import React from 'react';
import '.././pages/Landing/app.js';

function MeetingHeader () {
  function openNav() {
    console.log('open')
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    console.log('close')
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  return (
    <div class="mobile-nav-bar title-bar">
          <div class="title-bar-left">
          <a href="http://localhost:3000/"><img src="../baelogo2.png" width="60" alt=""></img></a>
            
          </div>
        {/* <div class="title-bar-center">
          <span class="title-bar-text">Meeting Name</span>
        </div> */}
          <div class="title-bar-right">
            <span class="title-bar-text"></span>
            <span class="title-bar-text">
              <div id="main">
                <button class="menu-icon" type="button" onClick={openNav}>
                </button>
              </div>
            </span>
            <div id="mySidebar" class="sidebar">
              <a href="http://localhost:3000/" class="closebtn" onClick={closeNav}>×</a>
              <a href="http://localhost:3000/">About</a>
              <a href="http://localhost:3000/">Services</a>
              <a href="http://localhost:3000/">Clients</a>
              <a href="http://localhost:3000/">Contact</a>
            </div>
          </div>
        </div>
  );
}

export default MeetingHeader;
