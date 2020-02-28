import React from 'react';

function MeetingHeader(props) {
  return (
    <div class="mobile-nav-bar title-bar">
          <div class="title-bar-left">
          <a href="#"><img src="../baelogo2.png" width="60"></img></a>
            
          </div>
        <div class="title-bar-center">
          <span class="title-bar-text">Meeting Name</span>
        </div>
          <div class="title-bar-right">
            <span class="title-bar-text"></span>
            <span class="title-bar-text"><button class="menu-icon" type="button"></button></span>
          </div>
        </div>
  );
}

export default MeetingHeader;
