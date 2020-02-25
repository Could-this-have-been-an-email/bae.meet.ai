import React, { useState, useReducer, useRef } from 'react';
import '../styles/newMeeting.css';
import InfoMeeting from '../components/InfoMeeting';

function Meeting() {
  // const [oneMeeting, setOneMeeting] = useState([]);
  const allMeetings = [];

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
    } else if (action.type === 'resetState') {
      return state = ''
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

  const handleInput = event => {
    event.preventDefault();

    let oneMeeting = {
      id: allMeetings.length,
      date: event.target.meetingDate.value,
      time: event.target.meetingTime.value,
      location: event.target.meetingLocation.value,
      duration: event.target.meetingDuration.value,
      name: event.target.meetingName.value,
      agenda: agendavalue || event.target.meetingAgenda.value
    };

    allMeetings.push(oneMeeting);
    dispatch({
      type: 'resetState'
    });
    console.log('2', allMeetings);

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
