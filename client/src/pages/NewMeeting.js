import React, { useReducer, useRef, useState, useEffect } from 'react';
import InfoMeeting from '../components/InfoMeeting';
import '../styles/newMeeting.css'
import API from '../utils/API';

function Meeting() {
  let usersSelected = [];
  const [users, setUsers] = useState([]);


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

  useEffect(() => {
    async function fetchData() {
      await API.getAllUsers()
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))


    }
    fetchData();
  }, [])
  console.log(users)
  // Update the document title using the browser API

  const submitUsers = event => {
    const filterUser = users.filter(user =>
      user._id === event.target.name
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

  // const submitBae = () => {
  //   dispatch({
  //     type: 'addBae',
  //     value: baeInput.current.value.trim()
  //   });
  //   baeInput.current.value = '';
  // };

  const submitMeetingInfoAPI = meeting => {
    console.log('2', meeting)
    API.createMeeting(meeting)
      .then(console.log('completedapi'))
      .catch(err => console.log(err))
  }
  const submitFormUser = event => {
    event.preventDefault();

    let oneMeeting = {
      date: event.target.meetingDate.value,
      time: event.target.meetingTime.value,
      location: event.target.meetingLocation.value.trim(),
      duration: event.target.meetingDuration.value,
      outcome: event.target.outcome.value,
      name: event.target.meetingName.value.trim(),
      agenda: agendavalue,
      // bae: baevalue,
      users: usersSelected
    };

    console.log('1', oneMeeting)
    submitMeetingInfoAPI(oneMeeting);
  };

  return (
    <div>
      <InfoMeeting
        submitform={submitFormUser}
        submitAgenda={submitAgenda}
        agendaInput={agendaInput}
        agendavalueMap={agendavalue}
        userJson={users}
        submitUsers={submitUsers}
      ></InfoMeeting>
    </div>
  );
}

export default Meeting;
