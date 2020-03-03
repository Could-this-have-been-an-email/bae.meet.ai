import React from "react";

function Agenda(props) {
  return (
    <>
      <div class="grid grid-cols-3 gap-1 ml-3 border shadow container flex items-center">
        <div class="col-span-1 flex items-center">
          <input type="checkbox" />
        </div>
        <div class="col-start-2 flex items-center">
          {" "}
          {props.agenda.newagenda}
        </div>
        <div class="col-start-3 flex items-center justify-end">
          <button
            class="fa fa-arrow-up"
            onClick={() => props.handleUpVote(props.agenda._id)}
          ></button>
          <button
            class="fa fa-arrow-down"
            onClick={() => props.handleDownVote(props.agenda._id)}
          ></button>

          <span>{props.agenda.vote}</span>
        </div>
      </div>
      <div class="mb-4">
        <div>{props.taks}</div>
        <form>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Add a Task
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="task"
            type="text"
            placeholder="Task"
          ></input>
          <button
            onClick={() => props.handleTask(props.agenda._id)}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Add Task
          </button>
        </form>
      </div>
    </>
  );
}
export default Agenda;
