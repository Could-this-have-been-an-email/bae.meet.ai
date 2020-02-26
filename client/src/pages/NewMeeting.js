import React, { useReducer, useRef, useState } from 'react';
import '../styles/newMeeting.css';
import InfoMeeting from '../components/InfoMeeting';
import UserJson from '../utils/user.json';
import API from '../utils/API';

function Meeting() {
  let allMeetings = [];
  const [users, setUsers] = useState([UserJson]);

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

  const handleInput = event => {
    event.preventDefault();
    console.log('submit');

    let oneMeeting = {
      id: allMeetings.length,
      date: event.target.meetingDate.value,
      time: event.target.meetingTime.value,
      location: event.target.meetingLocation.value,
      duration: event.target.meetingDuration.value,
      name: event.target.meetingName.value,
      agenda: agendavalue
    };

    allMeetings.push(oneMeeting);
    console.log(allMeetings);
  };

  return (
    <div>
      <InfoMeeting
        submitform={handleInput}
        submitAgenda={submitAgenda}
        agendaInput={agendaInput}
        agendavalueMap={agendavalue}
        userJson={UserJson}
      ></InfoMeeting>
    </div>
  );
}

export default Meeting;
