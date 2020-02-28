import React, { useState, useEffect } from "react";
import API from "../utils/API";
import MeetingNotes from "../components/MeetingNotes";

function Meeting() {
  /* 
  
  EXAMPLE API CALL AND DATA; NOT ACTUAL CODE
  
  */

  const [meeting, setMeeting] = useState({});
  useEffect(() => {
    loadAllMeetings();
  }, []);

  //API call to get meeting and add to state
  const loadAllMeetings = () => {
    API.getAllMeetings().then(res => {
      setMeeting(res.data);
      console.log(res.data);
    });
  };

  /* END OF EXAMPLE */

  return <MeetingNotes></MeetingNotes>;

  // return (<h1>Hello Meeting!</h1>)
}

export default Meeting;
