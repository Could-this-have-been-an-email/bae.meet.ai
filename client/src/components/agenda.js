import React from "react";
import AddTasks from "../components/addTasks";

function Agenda(props) {
  var tasks = props.tasks;

  return (
    <div>
      <div className="grid grid-cols-3 gap-1 p-1 border shadow container flex items-center">
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
                      <input type="checkbox" />
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
      <AddTasks handleTask={props.handleTask}></AddTasks>
    </div>
  );
}
export default Agenda;
