import React from 'react';


const BAE = (props) => {
  console.log('pros bae', props)
  return (
    <div className="my-5">
      <div className="grid grid-cols-3 gap-1 p-1 border shadow container flex bg-purple-200 items-center">
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
      <div className="mx-16 pt-2">
        {props.tasks ? (
          <>
            {props.tasks.map(task => {
              return (
                <div className="py-1">
                  <div
                    className="p-1 bg-red-200 rounded-lg flex justify-center border"
                    key={task._id}
                  >
                    <div className="m-2"> {task.task}</div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
            <></>
          )}
      </div>
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