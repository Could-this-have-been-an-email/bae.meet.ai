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
  <div className="flex flex-wrap m-10 ">
      <div className="flex mb-4">
        <div className="max-w-sm rounded w-full overflow-hidden shadow-lg w-1/3 mb-4 mr-10 pb-10">
          <img classNameName="image w-full" src="https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg"></img>
          <div className="px-4 py-2">
            <div className="font-bold text-xl mb-2">John Smith</div>
            <p className="text-gray-700 text-base">
              Jr. Web Developer
            </p>
            <p className="text-gray-700 text-base">
              mcbride.katie@gmail.com            
            </p>
            <div><i class="fas fa-pen"></i></div>
          </div>
        </div>



        <div className="max-w-sm rounded w-full overflow-hidden shadow-lg w-1/3 mb-4 mr-10 pb-10">
          <div className="px-4 py-2">
            <div className="font-bold text-2xl mb-2">Meetings</div>
         
            <p className="text-gray-700 text-base">
              Time spent in meetings           
            </p>
          </div>
        </div>

        <div className="max-w-sm rounded w-full overflow-hidden shadow-lg w-1/3 mb-4 pb-10">
          <div className="px-4 py-2">
            <div className="font-bold text-2xl mb-2">Time Saved</div>
            <p className="text-gray-700 text-base">
            </p>
            <div className="wrapper">
                
          </div>
        </div>
        </div>
      </div>


        <div className="max-w-sm w-full lg:max-w-full lg:flex mb-10">
          <div className="border-r border-b bg-blue-500 border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                <div className="text-white font-bold px-12 py-12 text-align-center">Tasks</div>
                    
          </div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-1 justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2 ">Tasks</div>
                  <p className="text-gray-700 text-base">
                    <li>Create the front-end buttons for website</li>
                    <li>Make API calls for all routes</li>
                    <li>Wireframe home page. Include update name, picture, and e-mail.</li>
                  </p>
                </div>
          </div>
        </div>

        <div className="max-w-sm w-full lg:max-w-full lg:flex mb-10">
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
            <div className="border-r border-b bg-blue-500 border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                <div className="text-white font-bold px-12 py-12 text-align-center">Tasks</div>
                    
            </div>
          </div>
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

        <div className="max-w-sm w-full lg:max-w-full lg:flex mb-10">
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <div className="border-r border-b bg-blue-500 border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                <div className="text-white font-bold px-12 py-12 text-align-center">Tasks</div>
                    
          </div>
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
            
        <Link to="/newmeeting">
                <button color="white" className="is-rounded">
                  <span>New Meeting</span>
                </button>
        </Link>
  
  </div>
  ) 
}

export default User;