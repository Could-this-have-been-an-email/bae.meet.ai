import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {
  return (
    //
    <Link to={props.link}>
      {' '}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        {...props}
      >
        {props.children}
      </button>
    </Link>
  );
}

export default Button;
