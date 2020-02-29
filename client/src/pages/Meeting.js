import React, { useState, useEffect } from "react";
import API from "../utils/API";
import MeetingNotes from "../components/MeetingNotes";
import AttendeeCard from "../components/attendeeCard";
import MeetingHeader from "../components/meetingheader";

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
 
  

  return (
    <>
      <div class="grid grid-rows-7 grid-flow-col gap-1">
        <div class="row-start-2 col-start-2 col-span-4">Meeting Title</div>
        <div class="row-start-2 col-start-8 col-span-2">Attendees:</div>
        <div class="row-start-3 col-start-2 col-span-4">Outcome:</div>


        <div class="row-start-4 col-start-2 col-span-4">
          Pre-Mtg Info / BAE items:
        </div>
        <div class="row-start-5 col-start-2 col-span-4">Agenda:</div>
        <div class="row-start-6 row-end-6 col-start-2 col-span-4">
          Notes:
          <MeetingNotes></MeetingNotes>
        </div>
        <div class="row-start-3 row-span-4 col-start-8 col-span-2">
          <AttendeeCard></AttendeeCard>
        </div>
      </div>
    </>
  );
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