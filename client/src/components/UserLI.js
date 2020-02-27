import React from 'react';

const UserLI = props => {
  let username = `${props.first} ${props.lname}`;
  return (
    <div>
      <input
        onChange={props.submitUsers}
        type="checkbox"
        name={username}
      ></input>
      <label for="name">{username}</label>
    </div>
  );
};

export default UserLI;
