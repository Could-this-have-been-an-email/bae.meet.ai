import React, { useState, useReducer } from 'react';
import '../styles/newMeeting.css';
import InfoMeeting from '../components/InfoMeeting';

function Meeting() {
  const [meeting, dispatch] = useReducer((state, action) => {
    console.log(action);
  });

  const handleInput = event => {
    event.preventDefault();
    console.log('date', event.target.meetingDate.value );
    console.log('time', event.target.meetingTime.value );
    console.log('location', event.target.meetingLocation.value );

    console.log('duration', event.target.meetingDuration.value );
    console.log('name', event.target.meetingName.value );
    console.log('agenda', event.target.meetingAgenda.value );


  };
  return (
    <div>
      <InfoMeeting submitform={handleInput} meetingInfo={meeting}></InfoMeeting>
    </div>
  );
}

export default Meeting;
