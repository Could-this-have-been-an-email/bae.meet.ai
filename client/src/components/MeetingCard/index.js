import React from 'react';

function MeetingCard(props) {
  return (
    <>
      <div className="border-gray-300 border-solid border rounded p-3 m-4">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p className="is-marginless">
                <strong>{props.name} </strong>
                <small>
                  On {props.date} at {props.time} for {props.duration} minutes
                </small>
              </p>
              <p>Goal: {props.outcome}</p>
            </div>
          </div>
          <div className="media-right">
            <a className="button" href={`/meeting/${props.meetingID}`}>
              Go to meeting
            </a>
          </div>
        </article>
      </div>

      <hr className="mx-10"></hr>
    </>
  );
}

export default MeetingCard;
