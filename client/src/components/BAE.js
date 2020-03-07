import React from 'react';


const BAE = (props) => {
  console.log('pros bae', props)
  return (
    <div>
      <div className="grid grid-cols-3 gap-1 p-1 border shadow container flex items-center">
        <div className="col-start-2 flex items-center">
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
      {props.tasks ? (
        <>
          {props.tasks.map(task => {
            return (
              <div className="pt-1">
                <div
                  className="grid grid-cols-3 p-1 border w-full"
                  key={task._id}
                >
                  <div className="grid "> {task.task}</div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
          <></>
        )}
    </div>
    // <div className="bg-red-500">
    //   this is the agenda: {props.agenda}
    // </div>
    // <div className="bg-blue-500">
    //   this is the tasks: {props.tasks}
    // </div>


  )
}



export default BAE; 