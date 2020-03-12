import React from 'react';
import UserLI from '../components/UserLI';
import AgendaItem from '../components/AgendaItem';
import '../styles/infomeeting.css';

function InfoMeeting(props) {
  return (
    <div className="w-1/2 mx-auto mt-10 background">
      <div className="title font-bold">Create a new meeting</div>
      <div className="sub-title mb-10">Productivity starts here.</div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        id="meetingForm"
        onSubmit={props.submitform}
      >
        <div className="flex">
          <div className="w-1/2">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Date:
              </label>
              <input
                className="input"
                id="date"
                type="date"
                placeholder="Username"
                name="meetingDate"
                tabIndex="1"
              ></input>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Location:
              </label>
              <input
                className="input"
                id="location"
                type="text"
                placeholder="Location"
                name="meetingLocation"
                tabIndex="3"
              ></input>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Meeting Name:
              </label>
              <input
                className="input"
                id="name"
                type="text"
                placeholder="Meeting"
                name="meetingName"
                tabIndex="5"
              ></input>
            </div>
          </div>
          <div className="w-1/2 px-3">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Time:
              </label>
              <input
                className="input"
                id="time"
                type="time"
                placeholder="Username"
                name="meetingTime"
                tabIndex="2"
              ></input>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Duration:
              </label>
              <input
                className="input"
                id="duration"
                type="number"
                placeholder="Duration"
                name="meetingDuration"
                tabIndex="4"
              ></input>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Outcome:
          </label>
          <input
            className="input"
            id="outcome"
            type="text"
            placeholder="Outcome"
            name="outcome"
            tabIndex="6"
          ></input>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Agenda:
          </label>
          <ul key={props.agendavalueMap.id}>
            {props.agendavalueMap.map((item, index) => (
              <AgendaItem agenda={item.newagenda} id={item.id}></AgendaItem>
              // <li>{item.newagenda}</li>
            ))}
          </ul>
          <input
            ref={props.agendaInput}
            className="input my-4"
            id="agenda"
            type="text"
            placeholder="Agenda"
            name="meetingAgenda"
            tabIndex="7"
          ></input>
          <button
            onClick={props.submitAgenda}
            type="button"
            className="button is-warning"
          >
            Add Agenda
          </button>
        </div>
        <div className="mb-4">
          <div className="flex justify-end">
            <div className="col-end-1 rounded h-40 w-40 p-3 shadow-lg whitespace-no-wrap side-scrollbar-none border border-black overflow-y-scroll">
              {props.userJson.map(name => (
                <UserLI
                  key={props._id}
                  submitUsers={props.submitUsers}
                  first={name.firstName}
                  lname={name.lastName}
                  id={name._id}
                ></UserLI>
              ))}
            </div>
          </div>
        </div>
        <div className="flex">
          <input
            type="submit"
            value="Schedule Meeting"
            className="button is-success"
          ></input>
        </div>
      </form>
    </div>
  );
}

export default InfoMeeting;
