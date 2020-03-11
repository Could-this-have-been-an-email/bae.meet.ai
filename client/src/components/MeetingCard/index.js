import React from 'react';
import './style.css';

function MeetingCard(props) {
  return (
    <>
      <div className="border-gray-400 border-solid border rounded p-4 m-3">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <p className="is-marginless">
                <strong>{props.name} </strong>
              </p>
              <p className="is-marginless">
                <small>
                  On {props.date} at {props.time} for {props.duration} minutes
                </small>
              </p>
              <p>Goal: {props.outcome}</p>
            </div>
          </div>
          <div className="media-right">
            <a className="button is-outlined is-success" href={`/meeting/${props.meetingID}`}>
              Go to meeting
            </a>
          </div>
        </article>
      </div>

      {/* <hr className="mx-10"></hr> */}
    </>
  );
}

export default MeetingCard;
