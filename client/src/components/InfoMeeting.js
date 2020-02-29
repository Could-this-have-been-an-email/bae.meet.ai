import React from 'react';
import UserLI from '../components/UserLI';

function InfoMeeting(props) {
  return (
    <div className="w-1/2 mx-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        id="meetingForm"
        onSubmit={props.submitform}
      >
        <div className="flex">
          <div className="w-1/2">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date"
                type="date"
                placeholder="Username"
                name="meetingDate"
              ></input>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Location
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                type="text"
                placeholder="Location"
                name="meetingLocation"
              ></input>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Meeting Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Meeting"
                name="meetingName"
              ></input>
            </div>
          </div>
          <div className="w-1/2 px-3">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Time
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="time"
                type="time"
                placeholder="Username"
                name="meetingTime"
              ></input>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Duration
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="duration"
                type="number"
                placeholder="Duration"
                name="meetingDuration"
              ></input>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Agenda:
          </label>
          <ul>
            {props.agendavalueMap.map((item, index) => (
              <li>{item.newagenda}</li>
            ))}
          </ul>
          <input
            ref={props.agendaInput}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="agenda"
            type="text"
            placeholder="Agenda"
            name="meetingAgenda"
          ></input>
          <button
            onClick={props.submitAgenda}
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-3 px-4 rounded-full"
          >
            Add Agenda
          </button>
        </div>
        <div className="mb-4">
          <div className="flex justify-end">
            <div className="col rounded h-40 w-42 p-3 shadow-lg whitespace-no-wrap side-scrollbar-none border border-black overflow-y-scroll">
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
            className="mx-auto bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          ></input>
        </div>
      </form>
    </div>
  );
}

export default InfoMeeting;
