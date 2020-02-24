import React, { useState, useReducer } from 'react';
import '../styles/newMeeting.css';
import InfoMeeting from '../components/InfoMeeting';

function Meeting() {
  const[oneMeeting, setOneMeeting] =  useState([])
  // const [meeting, dispatch] = useReducer((state, action) => {
  //   console.log('action', action);
  //   if (action === 'createMeeting') {
  //     return [
  //       ...state,
  //       {
  //         meetingId: action.id,
  //         meetingDate: action.date,
  //         meetingTime: action.time,
  //         meetingLocation: action.location,
  //         meetingDuration: action.duration,
  //         meetingName: action.name,
  //         meetingAgenda: action.agenda
  //       }
  //     ];
  //   } else {
  //     return state;
  //   }
  // }, [{}]);

  const handleInput = event => {
    event.preventDefault();
    console.log('submit');
    setOneMeeting({
      // type: 'createMeeting',
      id: event.target.meetingTime.value,
      date: event.target.meetingDate.value,
      time: event.target.meetingTime.value,
      location: event.target.meetingLocation.value,
      duration: event.target.meetingDuration.value,
      name: event.target.meetingName.value,
      agenda: event.target.meetingAgenda.value
    });
  };

  console.log('onemeet', oneMeeting)
  return (
    <div>
      <InfoMeeting
        submitform={handleInput}
        // clickSubmit={handleInput}
        // meetingInfo={meeting}
      ></InfoMeeting>
    </div>
  );
}

export default Meeting;
