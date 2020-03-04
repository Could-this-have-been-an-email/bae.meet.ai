import React from "react";

function Agenda(props) {
  return (
    <>
      <div className="grid grid-cols-3 gap-1 px-1 border shadow container flex items-center">
        <div className="col-span-1 flex items-center">
          <input type="checkbox" />
        </div>
        <div className="col-start-2 flex items-center">
          {" "}
          {props.agenda.newagenda}
        </div>
        <div className="col-start-3 flex items-center justify-end">
          <button
            className="fa fa-arrow-up"
            onClick={() => props.handleUpVote(props.agenda._id)}
          ></button>
          <button
            className="fa fa-arrow-down"
            onClick={() => props.handleDownVote(props.agenda._id)}
          ></button>

          <span>{props.agenda.vote}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 px-2 border shadow container flex items-center">
        <div className="col-span-2 flex items-center">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="task"
            type="text"
            placeholder="Add a Task"
          ></input>
        </div>
        <div className="col-start-3 flex items-center justify-end">
          <button
            onClick={() => props.handleTask(props.agenda._id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Add Task
          </button>
        </div>
      </div>
    </>
  );
}
export default Agenda;

{
  /* {props.agenda.tasks ? (
          <div>
            {props.agenda.tasks.map(tasks => {
              console.log(tasks);
              return (
                <div class="mb-4">
                  <div>{tasks}</div>
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
              );
            })}
          </div>
        ) : (
          <></>
        )}*/
}
