import React, { useState, useEffect } from 'react';

function InfoMeeting() {
  return (
    <div>
      <form>
        <div>
          <input type="date">
          </input>
          <input type="time"></input>
          <input type="text" placeholder="Location"></input>
        </div>
        <div>
          <input type="number" placeholder="Duration"></input>
          <input type="text" placeholder="Meeting Name"></input>
        </div>
        
        
      </form>
    </div>
    )
}

export default InfoMeeting;
