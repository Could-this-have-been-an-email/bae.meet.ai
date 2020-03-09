import React, { useState, useEffect } from "react";
import Agenda from "./agenda"


function Dropdown(props) {

    const [task, setTask] = useState("");
    




return(
<div class="dropdown-content">
                            
    {props.attendees && props.attendees.map(attendee => {
    // console.log({attendee})
    return(
    <a className="dropdown-item">{attendee.firstName}</a>
        )
    })}
                            
</div>
)


};

export default Dropdown;