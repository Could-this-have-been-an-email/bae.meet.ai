import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {
  return (
    //
    <Link to={props.link}>
      {' '}
      <button className="button is-link" {...props}>
        {props.children}
      </button>
    </Link>
  );
}

export default Button;
