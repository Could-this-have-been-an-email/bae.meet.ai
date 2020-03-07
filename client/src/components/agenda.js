import React from "react";
import AddTasks from "../components/addTasks";

function Agenda(props) {
  var tasks = props.tasks;
  console.log("in header", tasks);

  return (
    <div className="test">
      <div className="grid grid-cols-3 gap-1 px-1 border shadow container flex items-center mt-5">

        <div className="col-span-1 flex items-center">
          <input type="checkbox" />
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
      <div className="grid col-start-3">
        {props.tasks ? (
          <>
            {tasks.map(task => {
              console.log("in map", task);
              return (
                <div className="ml-5 border" key={task._id}>
                  {task.task}
                </div>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </div>
      <AddTasks handleTask={props.handleTask}></AddTasks>
    </div>
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
