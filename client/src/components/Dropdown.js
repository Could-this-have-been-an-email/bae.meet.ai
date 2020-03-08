import React, { useState, useEffect } from "react";
import Agenda from "./agenda"


function Dropdown(props) {

    const [task, setTask] = useState("");
    

    function assignTask(){
        console.log("handle task")
        {props.attendees && props.attendees.map(attendee => {
            console.log({attendee})
            let id = attendee._id;
            // console.log(props.meeting)
            
            // API.updateMeeting(meeting._id, {
            //     $set: {
            //       "userId": { id }
            //     }
            //   });

            // task.userId.update
            })}
      
      
    };


return(
<div class="dropdown-content">
                            
    {props.attendees && props.attendees.map(attendee => {
    // console.log({attendee})
    return(
    <a className="dropdown-item" onClick={assignTask()}>{attendee.firstName}</a>
        )
    })}
                            
</div>
)


};

export default Dropdown;