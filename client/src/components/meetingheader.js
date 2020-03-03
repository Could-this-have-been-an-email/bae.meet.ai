import React from 'react';
import '.././pages/Landing/app.js';

function MeetingHeader () {

  return (
    <div className="mobile-nav-bar title-bar">
          <div className="title-bar-left">
          <a href="http://localhost:3000/"><img src="../baelogo2.png" width="80" alt=""></img></a>
            
          </div>
        {/* <div className="title-bar-center">
          <span className="title-bar-text">Meeting Name</span>
        </div> */}
          <div className="title-bar-right">
            <span className="title-bar-text"></span>
            <span className="title-bar-text">
            </span>
          </div>
        </div>
  );
}

export default MeetingHeader;
