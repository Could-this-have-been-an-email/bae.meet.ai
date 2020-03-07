import React from "react";

function AddTasks(props) {
  return (
    <div className="pl-10 flex container flex items-center">
      <div className="w-5/6 py-1 px-1">
        <input
          className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="task"
          type="text"
          placeholder="Add a Task"
        ></input>
      </div>
      <div className="flex w-1/6 justify-end">
        <button
          onClick={() => props.handleTask(props._id)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default AddTasks;
