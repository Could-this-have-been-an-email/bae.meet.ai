import React, { useState, useEffect } from "react";


function Dropdown(props) {


    return (
        <div class="dropdown-content">

            {props.attendees && props.attendees.map(attendee => {
                // console.log({attendee})
                return (
                    <div className="dropdown-item hover:bg-orange-300" key={attendee._id} useridvalue={attendee._id} taskidforuser={props.taskidforuser} agendaidforuser={props.agendaidforuser} onClick={props.addUserTask} attendeeFirstName={attendee.firstName} attendeeLastName={attendee.lastName}>{attendee.firstName} {attendee.lastName}</div>
                )
            })}

        </div>
    )



};

export default Dropdown;