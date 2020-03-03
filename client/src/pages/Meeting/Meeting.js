import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import MeetingNotes from "../../components/MeetingNotes";
import AttendeeCard from "../../components/attendeeCard";
import Agenda from "../../components/agenda";
import MeetingHeader from "../../components/meetingheader";

function Meeting() {
  const [meeting, setMeeting] = useState([]);

  var url = "http://localhost:3000/meeting/5e5dc2855840f235589b5d22";
  var id = url.substring(url.lastIndexOf("/") + 1);
  // console.log(id);

  useEffect(() => {
    loadMeeting();
  }, []);

  function loadMeeting() {
    // console.log(id);
    API.getMeeting(id)
      .then(res => {
        // console.log(res.data);
        setMeeting(res.data);
      })
      .catch(err => console.log(err));
  }

  function handleUpVote(id) {
    meeting.agenda.forEach(singleAgenda => {
      if (id === singleAgenda._id) {
        singleAgenda.vote += 1;
      }
      loadMeeting();
      // console.log(meeting._id);
      API.updateMeeting(meeting._id, meeting);
    });
  }

  function handleDownVote(id) {
    meeting.agenda.forEach(singleAgenda => {
      if (id === singleAgenda._id) {
        singleAgenda.vote -= 1;
      }
      loadMeeting();
      // console.log(meeting);
      API.updateMeeting(meeting._id, meeting);
    });
  }

  function handleTask(id) {
    meeting.agenda.forEach(singleAgenda => {
      if (id === singleAgenda._id) {
        var inputVal = document.getElementById("task").value;
        // console.log(inputVal)
        singleAgenda.tasks.task.push(inputVal);
        API.updateMeeting(meeting._id, meeting);
      }
      // console.log(meeting);
      console.log(singleAgenda.tasks.task);
    });
  }

  return (
    <>
      <div class="grid grid-rows-7 grid-flow-col gap-1">
        <div class="row-start-1">
          <MeetingHeader />
        </div>
        <div class="row-start-2 col-start-2 col-span-4 text-2xl">
          Meeting Title:
          {meeting.name}
        </div>
        <div class="row-start-2 col-start-8 col-span-2 text-2xl underline text-center">
          Attendees
        </div>
        <div class="row-start-3 col-start-2 col-span-4 text-lg">
          Outcome:{meeting.outcome}
        </div>

        <div class="row-start-4 col-start-2 col-span-4 text-lg">
          Pre-Mtg Info / BAE items:{meeting.backgroundForMeeting}
        </div>

        <div class="row-start-5 col-start-2 col-span-1 text-lg">
          {" "}
          Agenda:
          {meeting.agenda ? (
            <div>
              {meeting.agenda.map(agenda => {
                console.log(agenda);
                return (
                  <Agenda
                    agenda={agenda}
                    key={agenda._id}
                    handleDownVote={handleDownVote}
                    handleUpVote={handleUpVote}
                    handleTask={handleTask}
                  ></Agenda>
                );
              })}
            </div>
          ) : (
            <></>
          )}
        </div>

        <div class="row-start-6 row-end-6 col-start-2 col-span-4 text-lg">
          Notes:
          <MeetingNotes></MeetingNotes>
        </div>
        <div class="row-start-3 row-span-4 col-start-8 col-span-2 flex justify-center ">
          <AttendeeCard></AttendeeCard>
        </div>
        <div class="row-start-7 col-start-4">
          <input
            type="submit"
            value="Start Meeting"
            className="mx-auto bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          ></input>
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
