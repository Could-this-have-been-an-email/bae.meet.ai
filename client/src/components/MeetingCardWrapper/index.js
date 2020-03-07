import React from 'react';

function MeetingCardWrapper(props) {
  return (
    <>
      <div className="h-half scrollable">
        <p className="m-4 font-bold text-xl">{props.title}</p>
        {props.children}
      </div>
    </>
  );
}

export default MeetingCardWrapper;
