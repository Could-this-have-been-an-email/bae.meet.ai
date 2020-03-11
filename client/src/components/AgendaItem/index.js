import React from 'react';

function AgendaItem(props) {
  return (
    <>
      <div className="notification">
        <div className="delete" data-index={props.id - 1}></div>
        {props.agenda}
      </div>
    </>
  );
}

export default AgendaItem;
