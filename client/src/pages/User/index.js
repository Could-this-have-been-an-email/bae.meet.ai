import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router';
import './style.css';
import API from '../../utils/API';
import MeetingCardWrapper from '../../components/MeetingCardWrapper';
import MeetingCard from '../../components/MeetingCard';
import Navbar from '../../components/Navbar';
// import Chart from './chart.png';
// import Graph from './graph.png';

function User() {
  const [meetings, setMeetings] = useState([]);
  const [prevMeetings, setPrevMeetings] = useState([]);
  const [upcomingMeetings, setUpcomingMeetings] = useState([]);
  const [user, setUser] = useState([]);

  var full_url = document.URL; // Get current url
  var url_array = full_url.split('/'); // Split the string into an array with / as separator
  var id = url_array[url_array.length - 1]; // Get the last part of the array (-1)

  console.log(id);

  useEffect(() => {
    loadMeetings();
    // loadUser();
  }, []);

  function loadUser() {
    API.getUser(id)
      .then(res => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  function loadMeetings() {
    API.getAllMeetings()
      .then(res => {
        setMeetings(res.data);
        filter(res.data);
        filterUpcoming(res.data);
      })
      .catch(err => console.log(err));
  }

  function filter(filterMeetings) {
    const prevMeetings = filterMeetings.filter(meeting => {
      let today = new Date();
      return today > new Date(meeting.date);
    });
    setPrevMeetings(prevMeetings);
  }

  function filterUpcoming(filterUp) {
    const upcomingMeetings = filterUp.filter(meeting => {
      let today = new Date();
      return today < new Date(meeting.date);
    });
    setUpcomingMeetings(upcomingMeetings);
  }

  return (
    // Outline div
    <div>
      <Navbar />

      <div className="sm:flex h-all">
        <div className="b bg-blue-900 menu sidebar">
          <figure className="image is-square">
            <img src="https://images.unsplash.com/photo-1544133782-b62779394064?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
          </figure>
          <div className="p-6">
            <p className="text-4xl text-white"> Andrew Chon</p>
            <p className="text-gray-400">chonclan@gmail.com</p>
            <p className="text-gray-400"> Webdev</p>
          </div>
          <a className="button" href="/newmeeting">
            New meeting (will style later)
          </a>
        </div>

        <div className="b sm:flex w-full">
          <div className="b p-6 flex flex-col justify-around">
            <div className="w-64 b h-64"> Tasks </div>
            <div className="w-64 b h-64 flex flex-col justify-around text-center">
              <p>You've spent</p>
              <p className="text-6xl">300</p>
              <p>minutes on meetings</p>
            </div>
          </div>

          <div className="w-full">
            <MeetingCardWrapper title="UPCOMING MEETINGS">
              <ul id="meetingList ">
                {upcomingMeetings.map(meeting => {
                  return (
                    <li className="">
                      <MeetingCard
                        name={meeting.name}
                        time={meeting.time}
                        date={meeting.date}
                        duration={meeting.duration}
                        meetingID={meeting._id}
                        outcome={meeting.outcome}
                      ></MeetingCard>
                    </li>
                  );
                })}
              </ul>
            </MeetingCardWrapper>
            <MeetingCardWrapper title="PAST MEETINGS">
              <ul id="meetingList ">
                {prevMeetings.map(meeting => {
                  return (
                    <li className="">
                      <MeetingCard
                        name={meeting.name}
                        time={meeting.time}
                        date={meeting.date}
                        duration={meeting.duration}
                        meetingID={meeting._id}
                        outcome={meeting.outcome}
                      ></MeetingCard>
                    </li>
                  );
                })}
              </ul>
            </MeetingCardWrapper>
            {/* <div className="b h-half">
              <p className="m-4 font-bold text-xl">PAST MEETINGS</p>
            </div> */}
          </div>
        </div>
      </div>
      {/* Div for photo, name, button */}
      {/* <div className="flex-grid">
        <div className="col">
          <img
            className="w-40 h-40 rounded-full mx-20 my-10 shadow-2xl"
            src="https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg"
          ></img>
        </div> */}
      {/* Name, title, and e-mail */}
      {/* <div className="col">
          <div className="my-10">
            <h1 className="text-4xl text-gray-700">{user.firstName} {user.lastName}</h1>
            <h2 className="text-2xl text-gray-700">{user.position}</h2>
            <h2 className="text-2xl text-gray-700">{user.email}</h2>
          </div>
        </div> */}
      {/* Button */}
      {/* <div className="col">
          <Link to="/newmeeting">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-10 my-10">
              New Meeting
            </button>
          </Link>
        </div>
      </div> */}
      {/* To-Dos, graphs, and meetings */}
      {/* TIME SPENT IN MEETINGS */}
      {/* <div className="wrapper">
        <div className="box-wrapper">
          <div className="box1">
            <div className="max-w-sm rounded w-full overflow-hidden shadow-2xl w-1/3 mb-4 mr-10 pb-10">
              <div className="px-4 py-2">
                <div className="font-bold text-2xl mb-3 mt-3 border-b border-gray-400 w-full">
                  Time Saved
                </div>
                <img src={Graph}></img>
                <p>Hours spent in meetings each month.</p>
              </div>
            </div>
          </div> */}
      {/* TIME SAVED */}
      {/* <div className="box3">
            <div className="max-w-sm rounded w-full overflow-hidden shadow-2xl w-1/3 mb-4 pb-10">
              <div className="px-4 py-2">
                <div className="font-bold text-2xl mb-3 border-b mt-3 border-gray-400 w-full">
                  Meetings
                </div>
                <img src={Chart}></img>
                <p>Amount of time spent in meetings this week.</p>
              </div>
            </div>
          </div> */}
      {/* UPCOMING MEETINGS */}
      {/* <div className="box2">
        <div class="max-w-sm rounded w-full overflow-hidden shadow-2xl w-1/3 mb-4 mr-10 pb-10">
          <div class="px-4 py-2">
            <div class="font-bold text-2xl mb-3 border-b mt-3 border-gray-400 w-full">
              Upcoming Meetings
            </div>
            <p class="text-gray-700 text-base">
              <div className="mx-5">
                {upcomingMeetings.map(meeting => {
                  return (
                    <Link to={`/meeting/${meeting._id}`}>
                      <li>{meeting.name}</li>
                    </Link>
                  );
                })}{' '}
              </div>
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 right-0 mx-5">
              More
            </button>
          </div>
        </div>
      </div> */}
      {/* PREVIOUS MEETINGS */}
      {/* <div className="box4">
            <div className="max-w-sm rounded w-full overflow-hidden shadow-2xl w-1/3 mb-4 mr-10 pb-10">
              <div class="px-4 py-2">
                <div class="font-bold text-2xl mb-3 border-b mt-3 border-gray-400 w-full">
                  Previous Meetings
                </div>
                <p class="text-gray-700 text-base">
                  <div className="mx-5">
                    {prevMeetings.map(meeting => {
                      return (
                        <Link to={`/meeting/${meeting._id}`}>
                          <li>{meeting.name}</li>
                        </Link>
                      );
                    })}
                  </div>
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 right-0 mx-5">
                  More
                </button>
              </div>
            </div>
          </div>
        </div> */}
      {/* TASKS */}
      {/* <div className="box5">
          <div className="max-w-sm w-full lg:max-w-full lg:flex mb-10 pr-5 shadow-2xl">
            <div className="border-r border-b border-l border-gray-400  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-1 justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-2xl mb-2 border-b border-gray-400 w-full">
                  Tasks
                </div>
                <p className="text-gray-700 text-base">
                  <li>Create the front-end buttons for website</li>
                  <li>Make API calls for all routes</li>
                  <li>
                    Wireframe home page. Include update name, picture, and
                    e-mail.
                  </li>
                  <li>Create the front-end buttons for website</li>
                  <li>Make API calls for all routes</li>
                  <li>
                    Wireframe home page. Include update name, picture, and
                    e-mail.
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default User;
