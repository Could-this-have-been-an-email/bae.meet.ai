import React from "react";

function AddTasks(props) {
  return (
    <div className="grid grid-cols-3 ml-5 container flex items-center">
      <div className="col-span-2 flex items-center py-1 px-1 -mr-5">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="task"
          type="text"
          placeholder="Add a Task"
        ></input>

        <button
          onClick={() => props.handleTask(props.agenda._id)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline .w-auto"
          type="button"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default AddTasks;