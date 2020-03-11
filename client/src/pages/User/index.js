import React, { useState, useEffect } from 'react';
import './style.css';
import API from '../../utils/API';
import MeetingCardWrapper from '../../components/MeetingCardWrapper';
import MeetingCard from '../../components/MeetingCard';
import Navbar from '../../components/Navbar';

function User() {
  const [prevMeetings, setPrevMeetings] = useState([]);
  const [upcomingMeetings, setUpcomingMeetings] = useState([]);
  const [timeSpent, setTimeSpent] = useState('');
  const [user, setUser] = useState([]);

  var full_url = document.URL; // Get current url
  var url_array = full_url.split('/'); // Split the string into an array with / as separator
  var id = url_array[url_array.length - 1]; // Get the last part of the array (-1)

  useEffect(() => {
    loadMeetings();
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function loadUser() {
    API.getUser(id)
      .then(res => {
        setUser(res.data);
      })
      .catch(err => console.log(err));
  }

  function loadMeetings() {
    API.getAllMeetings()
      .then(res => {
        filterUserMeetings(res.data, id).then(result => filter(result));
      })
      .catch(err => console.log(err));
  }

  //Promise based filter that returns an array of meetings the user is in.
  function filterUserMeetings(allMeetings, userID) {
    return new Promise((resolve, reject) => {
      const userMeetings = [];
      //Get list of meetings
      allMeetings.forEach(meeting => {
        if (meeting.users.indexOf(userID) !== -1) {
          userMeetings.push(meeting);
        }
      });

      resolve(userMeetings);
    });
  }

  //Filter meetings based on date
  function filter(filterMeetings) {
    const prevMeetings = filterMeetings.filter(meeting => {
      let today = new Date();
      return today > new Date(meeting.date);
    });
    setPrevMeetings(prevMeetings);

    const upcomingMeetings = filterMeetings.filter(meeting => {
      let today = new Date();
      return today < new Date(meeting.date);
    });
    setUpcomingMeetings(upcomingMeetings);

    addTime(prevMeetings).then(time => setTimeSpent(time));
  }

  //Add total time spent during meetings
  function addTime(list) {
    return new Promise((resolve, reject) => {
      let totalTime = 0;
      list.forEach(element => {
        totalTime += element.duration;
      });
      resolve(totalTime);
    });
  }

  return (
    <div>
      <Navbar />

      <div className="sm:flex h-all">
        <div className="bg-blue-900 menu sidebar p-2">
          <div className="flex flex-row sm:flex-col pt-2">
            <figure id="profileIcon" className="image flex">
              <img
                className="is-rounded object-cover"
                alt="profile icon"
                src={user.profileURL}
              />
            </figure>
            <div className="p-6">
              <p className="text-2xl sm:text-4xl text-white text-center sm:text-left ">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-gray-400 text-center sm:text-left">
                {user.email}
              </p>
              <p className="text-gray-400 text-center sm:text-left">
                {user.position}
              </p>
            </div>
          </div>

          <a className="button is-fullwidth mt-6 is-info" href="/newmeeting">
            Create new meeting!
          </a>
        </div>

        <div className="sm:flex w-full">
          <div className="p-6 flex flex-col justify-around items-center">
            <div className="w-64 box h-64 flex flex-col justify-around text-center">
              <p>You've spent</p>
              <p className="text-6xl">{timeSpent}</p>
              <p>minutes in meetings</p>
            </div>
            <div className="w-64 h-64 box">
              <div className="text-center border-b-2 pb-3">Tasks</div>
              <li>Add voice recording to meetings.</li>
              <li>Create a user image.</li>
              <li>Pull completed notes back into WYSIWIG.</li>
              <li>Add iCal and Google functionality.</li>
            </div>
          </div>

          <div className="w-full">
            <MeetingCardWrapper title="UPCOMING MEETINGS">
              <ul id="currentMeetings ">
                {upcomingMeetings.map(meeting => {
                  return (
                    <li key={meeting._id}>
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
            <hr className="mx-20"></hr>
            <MeetingCardWrapper title="PAST MEETINGS">
              <ul id="prevMeetings">
                {prevMeetings.map(meeting => {
                  return (
                    <li key={meeting._id}>
                      <MeetingCard
                        name={meeting.name}
                        time={meeting.time}
                        date={meeting.date}
                        duration={meeting.duration}
                        meetingID={meeting._id}
                        outcome={meeting.outcome}
                        key={meeting._id}
                      ></MeetingCard>
                    </li>
                  );
                })}
              </ul>
            </MeetingCardWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
