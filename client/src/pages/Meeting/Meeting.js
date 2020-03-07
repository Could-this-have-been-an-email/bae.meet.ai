import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
// import MeetingNotes from "../../components/MeetingNotes";
import AttendeeCard from "../../components/attendeeCard";
import Agenda from "../../components/agenda";
import BAE from '../../components/BAE';
// import { PromiseProvider } from "mongoose";
import { Editor } from "@tinymce/tinymce-react";


function Meeting() {
  const [meeting, setMeeting] = useState([]);
  const [attendees, setAttendees] = useState([]);
  const [content, setContent] = useState("");


  const [agendaFiltered, setagendaFiltered] = useState([]);

  var full_url = document.URL; // Get current url
  var url_array = full_url.split("/"); // Split the string into an array with / as separator
  var id = url_array[url_array.length - 1]; // Get the last part of the array (-1)

  useEffect(() => {
    loadMeeting();
  }, []);

  function loadMeeting() {
    API.getMeeting(id)
      .then(res => {
        console.log("42", res.data);
        setMeeting(res.data);

        setagendaFiltered(res.data.agenda.sort(sortAgenda));
        let users = res.data.users;
        return Promise.all(
          users.map(user => {
            return API.getUser(user).then(res => {
              return res.data;
            });
          })
        );
      })
      .then(result => {
        setAttendees(result);
      })
      .catch(err => console.log(err));
  }

  let sortAgenda = (a, b) => {
    console.log("ab", a.vote, b);
    let voteA = a.vote;
    let voteB = b.vote;
    return voteB - voteA;
  };

  // function setAllUsers(users) {
  //   users.map(user => {
  //     API.getUser(user).then(res => {
  //       let newUser = res.data;
  //       allMeetingUsers.push(newUser);
  //       setAttendees(allMeetingUsers);
  //     });
  //   });
  // }

  function hideVotes() {
    var x = document.getElementById("js-votes");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function handleUpVote(id) {
    meeting.agenda.forEach(singleAgenda => {
      if (id === singleAgenda._id) {
        singleAgenda.vote += 1;
      }
      loadMeeting();
      API.updateMeeting(meeting._id, meeting);
    });
  }

  function handleDownVote(id) {
    meeting.agenda.forEach(singleAgenda => {
      if (id === singleAgenda._id) {
        singleAgenda.vote -= 1;
      }
      loadMeeting();
      API.updateMeeting(meeting._id, meeting);
    });
  }

  function handleTask(id) {
    meeting.agenda.forEach(singleAgenda => {
      if (id === singleAgenda._id) {
        var inputVal = document.getElementById("task").value;

        singleAgenda.tasks.push({
          completed: false,
          userId: "123",
          meetingId: meeting._id,
          agendaId: id,
          task: inputVal
        });
        singleAgenda.tasks.task = inputVal;

      }
      API.updateMeeting(meeting._id, meeting);
      loadMeeting();
    });
  }



  function taskUser(id) {

  }

  function handleNotes(id) {
    var inputNote = content;
    meeting.meetingNote.push({
      userName: "katieb",
      note: inputNote
    });

    API.updateMeeting(meeting._id, meeting);

    var inputNote = document.getElementById("notes").value;

    API.updateMeeting(meeting._id, {
      $set: {
        "meeting.note": { inputNote }
      }
    });
  }


  function sendMail() {
    // let emails = []
    // emails.join(";")

    var link =
      "mailto: mcbride.katieb@gmail.com; taylor.m.mcbride@gmail.com" +
      "?cc=myCCaddress@example.com" +
      "&subject=" +
      escape("Post Meeting Survey") +
      "&body=" +
      escape(document.getElementById("myText").value);

    window.location.href = link;
  }

  function handleEditorChange(content, editor) {
    setContent(content);
  }

  // console.log(meeting.agenda[0])

  // meeting.agenda.forEach(testing => {
  //   console.log(testing)
  // })
  console.log("attendee", attendees);

  return (
    <>
      <div className="grid grid-rows-7 grid-flow-col gap-1">
        <div className="row-start-1"></div>

        <div className="row-start-2 col-start-2 col-span-4 text-2xl font-extrabold">
          {meeting.name}
        </div>
        <div className="row-start-2 col-start-8 col-span-2 text-2xl font-bold text-center">
          Attendees
        </div>

        <div className="row-start-3 col-start-2 col-span-4 text-lg">
          <div className="font-bold">Outcome:</div>
          <div className="border border-solid border-gray-300 py-3 bg-gray-200">
            {meeting.outcome} This is where the outcome will be at.
          </div>
        </div>

        <div className="row-start-4 col-start-2 col-span-4 text-lg">
          <div className="font-bold">BAE items:</div>
          <div className="border border-solid border-gray-300 py-3 bg-gray-200">
            {meeting.agenda ? (
              <div className="bg-gray-100">
                {meeting.agenda.map(agenda => {
                  // console.log(agenda);
                  if (agenda.vote < 0) {
                    return (
                      <BAE
                        agenda={agenda}
                        key={agenda._id}
                        handleDownVote={handleDownVote}
                        handleUpVote={handleUpVote}
                        //   handleTask={handleTask}
                        tasks={agenda.tasks}
                      ></BAE>
                    );
                  }
                })}
              </div>
            ) : (
                <>
                  <div>No meeting agenda has been set!</div>
                </>
              )}
          </div>
        </div>

        <div className="row-start-5 col-start-2 col-span-4 text-lg">
          <div className="bg-red-500">
            <div className="font-bold">Agenda:</div>
            {meeting.agenda ? (
              <div>
                {meeting.agenda.map(agenda => {
                  // console.log(agenda);
                  if (agenda.vote >= 0) {
                    return (
                      <Agenda
                        agenda={agenda}
                        key={agenda._id}
                        handleDownVote={handleDownVote}
                        handleUpVote={handleUpVote}
                        handleTask={handleTask}
                        tasks={agenda.tasks}
                      ></Agenda>
                    );
                  }
                })}
              </div>
            ) : (
                <>
                  <div>No meeting agenda has been set!</div>
                </>
              )}
          </div>
        </div>

        <div className="row-start-6 row-end-6 col-start-2 col-span-4 text-lg">
          <div className="font-bold">Notes:</div>

          <Editor
            apiKey="avgvd7u4i68a9mq24lbgo9zusv5tq1vyu4pw9xrjkt9depds"
            initialValue="<p>This is the initial content of the editor</p>"
            id="notes"
            init={{
              height: 200,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount"
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help"
            }}
            onEditorChange={handleEditorChange}
          />
        </div>

        <div className="row-start-3 row-span-4 col-start-8 col-span-2 ">
          {meeting.users ? (
            <>
              {attendees.map(attendee => {
                return (
                  <AttendeeCard
                    key={attendee._id}
                    attendee={attendee}
                  ></AttendeeCard>
                );
              })}
            </>
          ) : (
              <></>
            )}
        </div>
        <div className="row-start-7 col-start-4">
          <input
            type="submit"
            value="Start Meeting"
            className="mx-auto bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={() => hideVotes()}
          ></input>
        </div>

        <textarea id="myText" className="hideSurvey">
          Thank you for your attendance. I would appreciate your feedback in
          order to improve our meetings. Please follow the link to the fill out
          a 5 question survey. https://www.surveymonkey.com/r/Y2YW3FQ
        </textarea>

        <div className="row-start-7 col-start-4">
          <input
            type="submit"
            value="End Meeting"
            className="mx-auto bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={() => handleNotes()}
            onClick={() => sendMail()}
          ></input>
        </div>
      </div>
    </>
  );
}

export default Meeting;
