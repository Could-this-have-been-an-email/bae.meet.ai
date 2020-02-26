import React from 'react';

const UserLI = props => {
  let username = `${props.first} ${props.lname}`;
  return (
    <div className="mb-4">
      <input type="checkbox" name={username}></input>
      <label for="name">{username}</label>
    </div>
    // <ul>
    //   <li>
    //     <strong>Name:</strong>
    //   </li>
    //   <li>
    //     <strong>Salary:</strong> ${props.lname}
    //   </li>
    //   <li>
    //     <strong>Age:</strong> {props.job}
    //   </li>
    // </ul>
  );
};

export default UserLI;
