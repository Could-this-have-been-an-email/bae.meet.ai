import React, { useState, useReducer, useRef } from 'react';
import '../styles/newMeeting.css';
import InfoMeeting from '../components/InfoMeeting';

function Meeting() {
  // const [oneMeeting, setOneMeeting] = useState([]);
  const agendaInput = useRef();
  const [agendavalue, dispatch] = useReducer((state, action) => {
    if (action.type === 'addAgenda') {
      return [
        ...state,
        {
          id: state.length + 1,
          newagenda: action.value
        }
      ];
    } else {
      return state;
    }
  }, []);

  const submitAgenda = () => {
    dispatch({
      type: 'addAgenda',
      value: agendaInput.current.value
    });
    agendaInput.current.value = '';
  };

  console.log(agendavalue);

  const handleInput = event => {
    event.preventDefault();
    let meetings = [{}];

    let oneMeeting = {
      id: event.target.meetingTime.value,
      date: event.target.meetingDate.value,
      time: event.target.meetingTime.value,
      location: event.target.meetingLocation.value,
      duration: event.target.meetingDuration.value,
      name: event.target.meetingName.value,
      agenda: agendavalue
    };

    let allMeetings = meetings.push(oneMeeting);
    console.log('submit', allMeetings);
    // setOneMeeting({
    //   id: event.target.meetingTime.value,
    //   date: event.target.meetingDate.value,
    //   time: event.target.meetingTime.value,
    //   location: event.target.meetingLocation.value,
    //   duration: event.target.meetingDuration.value,
    //   name: event.target.meetingName.value,
    //   agenda: event.target.meetingAgenda.value
    // });
  };

  return (
    <div>
      <InfoMeeting
        submitform={handleInput}
        submitAgenda={submitAgenda}
        agendaInput={agendaInput}

        // clickSubmit={handleInput}
        // meetingInfo={meeting}
      ></InfoMeeting>
    </div>
  );
}

export default Meeting;
