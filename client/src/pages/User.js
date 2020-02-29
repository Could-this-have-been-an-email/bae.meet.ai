import React, { useState, useEffect } from 'react';
import "../styles/user.css";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router';
import API from "../utils/API";



function User() {
  const [meetings, setMeetings] = useState([])
  const [prevMeetings, setPrevMeetings] = useState([])
  const [upcomingMeetings, setUpcomingMeetings] = useState([])

  

  useEffect(() => {
    loadMeetings()
  }, [])


  function loadMeetings() {
    API.getAllMeetings()
      .then(res => {
        setMeetings(res.data);
        filter(res.data);
        filterUpcoming(res.data);
       
      }
      )
      .catch(err => console.log(err));
      
  };

  function filter(filterMeetings){
    const prevMeetings = filterMeetings.filter(meeting => {
      let today = new Date();
      return today > new Date(meeting.date);
   } 
  );
  setPrevMeetings(prevMeetings);
  }

  function filterUpcoming(filterUp){
    const upcomingMeetings = filterUp.filter(meeting => {
      let today = new Date();
      return today < new Date(meeting.date);
   } 
  );
  setUpcomingMeetings(upcomingMeetings);
  }



  return (
    // Outline div
    <div>

    {/* Div for photo, name, button */}
    <div className="flex-grid">
      <div className="col">
        <img className="w-40 h-40 rounded-full mx-20 my-10"src="https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg"></img>
      </div>

      {/* Name, title, and e-mail */}
      <div className="col">
        <div className="my-10">
        <h1 className="text-4xl text-gray-700">Katie McBride</h1>
        <h2 className="text-2xl text-gray-700">Jr. Web Developer</h2>
        <h2 className="text-2xl text-gray-700">mcbride.katie@gmail.com</h2>
        </div>
      </div>

      {/* Button */}
      <div className="col">
        <Link to="/newmeeting">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-10 my-10">New Meeting</button>
        </Link> 
      </div>
    </div>



    {/* To-Dos, graphs, and meetings */}

    {/* TIME SPENT IN MEETINGS */}
    <div className="wrapper">
      <div className="box1">
        <div className="max-w-sm rounded w-full overflow-hidden shadow-lg w-1/3 mb-4 mr-10 pb-10">
          <div className="px-4 py-2">
            <div className="font-bold text-2xl mb-2">Meetings</div>
         
            <p className="text-gray-700 text-base">
              Time spent in meetings           
            </p>
          </div>
        </div>
      </div>


      {/* UPCOMING MEETINGS */}
      <div className="box2">
        <div className="max-w-sm w-full lg:max-w-full lg:flex mb-10">
          <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-1 justify-between leading-normal">
                <div class="mb-8">
                  <div class="text-gray-900 font-bold text-xl mb-2">Upcoming Meetings</div>
                  <p class="text-gray-700 text-base">
                    <div>{upcomingMeetings.map(meeting =>{
                      return(
                        <li>{meeting.name}</li>
                      );
                        })} </div>
                  </p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">More</button>
                </div>
          </div>
        </div>
      </div>


      {/* TIME SAVED */}
      <div className="box3">
        <div className="max-w-sm rounded w-full overflow-hidden shadow-lg w-1/3 mb-4 pb-10">
          <div className="px-4 py-2">
            <div className="font-bold text-2xl mb-2">Time Saved</div>
            <p className="text-gray-700 text-base">
            </p>
        </div>
        </div>
      </div>


      
      {/* PREVIOUS MEETINGS */}
      <div className="box4">
        <div className="max-w-sm w-full lg:max-w-full lg:flex mb-10">
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          </div>
          <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-1 justify-between leading-normal">
                <div class="mb-8">
                  <div class="text-gray-900 font-bold text-xl mb-2">Previous Meetings</div>
                  <p class="text-gray-700 text-base">
                    <div>{prevMeetings.map(meeting =>{
                      return(
                        <li>{meeting.name}</li>
                      );
                        })} </div>
                  </p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 right-0">More</button>
                </div>
          </div>
        </div>
      </div>


      {/* TASKS */}
      <div className="box5">
        <div className="max-w-sm w-full lg:max-w-full lg:flex mb-10">
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-1 justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-3xl mb-2 border-b border-gray-400 w-full">Tasks</div>
                  <p className="text-gray-700 text-base">
                    <li>Create the front-end buttons for website</li>
                    <li>Make API calls for all routes</li>
                    <li>Wireframe home page. Include update name, picture, and e-mail.</li>
                    <li>Create the front-end buttons for website</li>
                    <li>Make API calls for all routes</li>
                    <li>Wireframe home page. Include update name, picture, and e-mail.</li>
                  </p>
                </div>
          </div>
        </div>
      </div>
    </div>



    </div>
  ) 
}

export default User;