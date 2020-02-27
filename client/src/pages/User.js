import React, { useState, useEffect } from 'react';
import "../styles/user.css";

function User() {
  return (
  <div className="flex flex-wrap m-10">

      <div>
        <img className="image" src="https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg" alt="Avatar"></img>
      </div>
      <div>
        <h1 contenteditable="true" className="personalInfoOne">Katie McBride</h1>
        <h2 contenteditable="true" className="personalInfoTwo">Jr. Web Developer</h2>
        <h3 contenteditable="true" className="personalInfoTwo">mcbride.katie@gmail.com</h3>
      </div>

        <div className="max-w-sm w-full lg:max-w-full lg:flex mb-10">
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-12 px-12 rounded">
                  Tasks
                </button>
          </div>
          <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-1 justify-between leading-normal">
                <div class="mb-8">
                  <div class="text-gray-900 font-bold text-xl mb-2">Tasks</div>
                  <p class="text-gray-700 text-base">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                  </p>
                </div>
          </div>
        </div>
         



    <div className="max-w-sm w-full lg:max-w-full lg:flex mb-10">
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-12 px-8 rounded">
          Upcoming
        </button>
      </div>
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-1 justify-between leading-normal">
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-2">Upcoming Meetings</div>
          <p class="text-gray-700 text-base">Task #1, Task #2</p>
        </div>
      </div>
    </div>




    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400  flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-12 px-4 rounded">
          Prev. Meetings
        </button>
      </div>
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-1 justify-between leading-normal">
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-2">Previous Meetings</div>
          <p class="text-gray-700 text-base">Task #1, Task #2</p>
        </div>
      </div>
    </div>






  </div>
  ) 
}

export default User;