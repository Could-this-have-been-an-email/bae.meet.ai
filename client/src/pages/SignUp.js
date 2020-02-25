import React, { useState, useEffect } from "react";
import "../styles/SignUp.css";

function SignUp() {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("lastname is " + firstname);
    console.log("lastname is " + lastname);
    console.log("email is " + email);
    console.log("password is " + password);
  };

  return (
    <div className="container mx-auto px-64">
      <form onSubmit={handleSubmit}>
        <div className="form-icons">
          <h1>Register for an account</h1>

          <div className="input-group">
            <span className="input-group-label">
              <i className="fa fa-user"></i>
            </span>
            <input
              className="input-group-field"
              type="text"
              placeholder="First name"
              onChange={e => setFirstname(e.target.value)}
            />

            <input
              className="input-group-field"
              type="text"
              placeholder="Last name"
              onChange={e => setLastname(e.target.value)}
            />
          </div>

          <div className="input-group">
            <span className="input-group-label">
              <i className="fa fa-envelope"></i>
            </span>
            <input
              className="input-group-field"
              type="text"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <span className="input-group-label">
              <i className="fa fa-key"></i>
            </span>
            <input
              className="input-group-field"
              type="text"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button className="button expanded">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
