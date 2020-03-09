import React from "react";

function attendeeCard(props) {
  return (
    <div className="max-w-sm rounded overflow-hidden mb-1 py-1">
      <div className="grid grid-cols-6 gap-1 shadow-md rounded-full custom-6 font-white">
        <div className="col-span-1">
          <img
            alt=""
            src="https://i.imgur.com/8Km9tLL.jpg"
            className="rounded-full h-10 p-1"
          />
        </div>
        <div className="col-span-5 flex items-center justify-center font-bold">
          {props.attendee.firstName} {props.attendee.lastName}
        </div>
      </div>
    </div>
  );
}

export default attendeeCard;
