import React from 'react';

const UserLI = props => {
  let username = `${props.first} ${props.lname}`;


  return (
    <div>
      <input
        ref={props.userRef}
        onChange={props.submitUsers}
        type="checkbox"
        name={props.id}
      ></input>
      <label>{username}</label>
    </div>
  );
};

export default UserLI;
