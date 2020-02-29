import React, { useState, useEffect } from "react";
import API from "../utils/API";
import MeetingNotes from "../components/MeetingNotes";

function Meeting() {

  const [meeting, setMeeting] = useState([])

  var url = 'http://localhost:3000/meeting/5e587edede38f8205a93f6d9';
  var id = url.substring(url.lastIndexOf('/') + 1);
  // console.log(id); 

  useEffect(() => {
    loadMeeting(id)
  }, [])

  function loadMeeting(id) {
    console.log(id)
    API.getMeeting(id)
      .then(res => {
        setMeeting(res.data);
        console.log(res.data);
        
      }
    )
      .catch(err => console.log(err));
  };
 
  return <MeetingNotes></MeetingNotes>;

  // return (<h1>Hello Meeting!</h1>)
}

export default Meeting;


 /* 
  
  EXAMPLE API CALL AND DATA; NOT ACTUAL CODE
  
  */

//  const [meeting, setMeeting] = useState({});
//  useEffect(() => {
//    loadAllMeetings();
//  }, []);

 //API call to get meeting and add to state
//  const loadAllMeetings = () => {
//    API.getAllMeetings().then(res => {
//      setMeeting(res.data);
//      console.log(res.data);
//    });
//  };

 /* END OF EXAMPLE */