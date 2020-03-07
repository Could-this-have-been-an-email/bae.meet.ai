import React from "react";

function Agenda(props) {
  var tasks = props.tasks;
  console.log(props);

  return (
    <div>
      <div className="grid grid-cols-3 gap-1 p-1 border shadow container flex items-center">
        <div className="col-span-1 flex items-center ">
          <input className="w-5 h-5" type="checkbox" />
        </div>
        <div className="col-start-2 flex items-center">
          {" "}
          {props.agenda.newagenda}
        </div>

        <div
          id="js-votes"
          className="col-start-3 flex items-center justify-end"
        >
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
      <div className="grid col-start-3 pl-10">
        {props.tasks ? (
          <>
            {tasks.map(task => {
              return (
                <div className="pt-1">
                  <div
                    className="grid grid-cols-3 p-1 border w-full"
                    key={task._id}
                  >
                    <div className="col-span-1 flex items-center">
                      <input className="w-5 h-5" type="checkbox" />
                    </div>
                    <div className="grid "> {task.task}</div>
                    <div className="flex items-center justify-end">
                      <i class="fa fa-ellipsis-v"></i>
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
            onClick={() => props.handleTask(props.agenda._id)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
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
