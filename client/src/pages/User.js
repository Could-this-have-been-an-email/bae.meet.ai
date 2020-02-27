import React, { useState, useEffect } from 'react';
import "../styles/user.css";



function User() {
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
                    <li>3/20 new hire meeting. </li>
                    <li>3/24 Web Design Meeting for new project</li>
                    <li>3/26 Bootcamp and new recruits</li>
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
                    <li>2/20 Review web design layout. </li>
                    <li>2/24 Connecting front-end to back-end</li>
                    <li>2/26 Web Design name and logo</li>
                  </p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 right-0">More</button>
                </div>
          </div>
        </div>
     
  
  </div>
  ) 
}

export default User;