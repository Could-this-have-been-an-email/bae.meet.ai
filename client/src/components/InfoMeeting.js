import React, { useState, useEffect } from 'react';

function InfoMeeting() {
  return (
    <div className="w-1/2 mx-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
              ></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InfoMeeting;
