import React from 'react';
import '../styles/SignUp.css';
import API from '../utils/API';
import Button from '../components/button';

function SignUp() {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    let oneUser = {
      firstName: e.target.userFirstName.value,
      lastName: e.target.userLastName.value,
      position: e.target.userJobTitle.value,
      email: e.target.userEmail.value,
      password: e.target.userPassword.value
    };

    console.log(oneUser);
    submitOneUserAPI(oneUser);
  };

  const submitOneUserAPI = user => {
    API.createUser(user)
      .then(window.location.assign('/login'))
      .catch(err => console.log(err));
  };

  return (
    <div className="container mx-auto px-64">
      <form type="submit" onSubmit={handleSubmit} id="userForm">
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
              name="userFirstName"
            />

            <input
              className="input-group-field"
              type="text"
              placeholder="Last name"
              name="userLastName"
            />
          </div>

          <div className="input-group">
            <span className="input-group-label">
              <i className="fa fa-id-card"></i>
            </span>
            <input
              className="input-group-field"
              type="text"
              placeholder="Job Title"
              name="userJobTitle"
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
              name="userEmail"
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
              name="userPassword"
            />
          </div>
        </div>

        <input
          value="Sign Up"
          className="button expanded"
          type="submit"
        ></input>
      </form>
    </div>
  );
}

export default SignUp;
