import React from "react";
import AddTasks from "../components/addTasks";

function Agenda(props) {
  var tasks = props.tasks;

  return (
    <div className="test">
      <div className="grid grid-cols-3 gap-1 px-1 border shadow container flex items-center">
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
