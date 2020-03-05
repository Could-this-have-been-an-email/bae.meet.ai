import React from 'react';
import '.././pages/Landing/app.js';

function MeetingHeader () {

  return (
    <div class="mobile-nav-bar title-bar">
          <div class="title-bar-left">
          <a href="http://localhost:3000/"><img src="../baelogo2.png" width="80" alt=""></img></a>
            
          </div>
        {/* <div class="title-bar-center">
          <span class="title-bar-text">Meeting Name</span>
        </div> */}
          <div class="title-bar-right">
            <span class="title-bar-text"></span>
            <span class="title-bar-text">
            </span>
          </div>
        </div>
  );
}

export default MeetingHeader;
