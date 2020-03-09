import React from "react";

const BAE = props => {
  console.log("pros bae", props);
  return (
    <div className="p-3">
      <div className="gap-1 p-1 border rounded shadow container flex items-center justify-between bg-white">
        <div className="w-1/12"></div>
        <div className="flex items-center justify-center w-10/12">
          {props.agenda.newagenda}
        </div>

        <div id="js-votes" className="flex items-center justify-end w-1/12">
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
    </div>
  );
};

export default BAE;
