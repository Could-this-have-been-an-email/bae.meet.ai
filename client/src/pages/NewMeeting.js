import React, { useReducer, useRef, useState } from 'react';
import '../styles/newMeeting.css';
import InfoMeeting from '../components/InfoMeeting';
import UserJson from '../utils/user.json';
import API from '../utils/API';

function Meeting() {
  // let allMeetings = [];
  let usersSelected = [];
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

  const submitUsers = event => {
    const filterUser = UserJson.filter(user =>
      user.jobTitle === event.target.name
    )

    usersSelected.push(filterUser);

    console.log(usersSelected);
  };

  const submitAgenda = () => {
    dispatch({
      type: 'addAgenda',
      value: agendaInput.current.value.trim()
    });
    agendaInput.current.value = '';
  };
  const submitMeetingInfo = meeting => {
    console.log('2', meeting)
  }
  const submitFormUser = event => {
    event.preventDefault();
    // console.log(allMeetings);

    let oneMeeting = {
      // id: allMeetings.length,
      date: event.target.meetingDate.value,
      time: event.target.meetingTime.value,
      location: event.target.meetingLocation.value.trim(),
      duration: event.target.meetingDuration.value,
      name: event.target.meetingName.value.trim(),
      agenda: agendavalue,
      users: usersSelected
    };

    // allMeetings.push(oneMeeting);
    console.log('1', oneMeeting)
    // JSON.parse(JSON.stringify(allMeetings));
    submitMeetingInfo(oneMeeting);
  };

  return (
    <div>
      <InfoMeeting
        submitform={submitFormUser}
        submitAgenda={submitAgenda}
        agendaInput={agendaInput}
        agendavalueMap={agendavalue}
        userJson={UserJson}
        submitUsers={submitUsers}
      ></InfoMeeting>
    </div>
  );
}

export default Meeting;
