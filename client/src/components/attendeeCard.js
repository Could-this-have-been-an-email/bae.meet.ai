import React from "react";

function attendeeCard(props) {
  // const lastName = props.attendee.lastName;
  // const attendeeName = props.attendee;
  return (
    <div className="max-w-sm rounded overflow-hidden">
      <div className="grid grid-cols-6 gap-1 shadow border">
        <div className="col-span-1">
          <img
            src="https://i.imgur.com/8Km9tLL.jpg"
            className="rounded-full border-solid border-white border-2 mt-3 mb-3"
          />
        </div>
        <div className="col-span-5 flex items-center justify-center">
          {props.attendee.firstName}
        </div>
      </div>
    </div>
  );
}

export default attendeeCard;
