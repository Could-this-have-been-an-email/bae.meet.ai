import React, { useState } from 'react';
// import AddTasks from "../components/addTasks";

import '../pages/Meeting/Meeting';
// import { PromiseProvider } from 'mongoose';
import Dropdown from './Dropdown';


function Agenda(props) {
  const [popup, setPopup] = useState('');

  function popupUser() {

    console.log('working');

    setPopup(true);
  }

  return (
    <div className="p-5">
      <div className="gap-1 p-1 border rounded shadow container flex items-center justify-between bg-white">
        <div className="flex justify-left items-center w-1/12 ">
          <input className="w-5 h-5" type="checkbox" />
        </div>

        <div className="flex items-center justify-center w-10/12">
          {" "}

          {props.agenda.newagenda}
        </div>

        <div id="js-votes" className="flex items-center justify-end w-1/12">
          <button
            className="fa fa-arrow-up px-1"
            onClick={() => props.handleUpVote(props.agenda._id)}
          ></button>
          <button
            className="fa fa-arrow-down px-1"
            onClick={() => props.handleDownVote(props.agenda._id)}
          ></button>

          <span className="px-1">{props.agenda.vote}</span>
        </div>
      </div>
      <div className="px-16 pt-2">
        {props.tasks ? (
          <>
            {props.tasks.map(task => {
              return (
                <div className="py-1">
                  <div
                    className="flex flex-row items-baseline justify-between p-1 border-2 rounded w-full"
                    key={task._id}
                  >
                    <div className="pl-3 text w-5/6 font-white font-bold">
                      {" "}
                      {task.task}
                    </div>
                    <div className="popup flex w-1/6 justify-end">
                      <div class="dropdown is-hoverable">
                        <div class="dropdown-trigger">
                          <button

                            class="button h-8"
                            aria-haspopup="true"
                            aria-controls="dropdown-menu4"
                          >
                            <i class="fas fa-user"></i>

                          </button>
                        </div>
                        <div
                          class="dropdown-menu"
                          id="dropdown-menu4"
                          role="menu"
                        >
                          <Dropdown
                            attendees={props.attendees}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="px-16 flex container items-center">
        <div className="w-5/6 p-1">
          <input
            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="task"
            type="text"
            placeholder="Add a Task"
          ></input>
        </div>
        <div className="flex w-1/6 justify-end">
          <button
            onClick={() => props.handleTask(props.agenda._id)}
            className="plum_plate hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
export default Agenda;
