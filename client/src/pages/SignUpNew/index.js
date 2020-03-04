import React from 'react';
import API from '../../utils/API';
import Navbar from '../../components/Navbar';
import './style.css';

function SignUpNew() {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    let oneUser = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      position: e.target.title.value,
      email: e.target.email.value,
      password: e.target.password.value
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
    <div className="">
      <Navbar></Navbar>
      <div className="section bg-custom">
        <div className="container ">
          <div className="border-gray-300 border-solid border rounded max-w-screen-md center p-6 md:p-24 bg-white">
            <div className="title">Sign Up</div>
            <div className="subtitle">
              Already have an account?{' '}
              <a className="text-blue-600" href="/login">
                Sign In
              </a>
            </div>
            <form onSubmit={handleSubmit}>
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input className="input" type="email" name="email" />
                <span className="icon is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
              <div className="columns">
                <div className="column">
                  <label className="label">First Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                    />
                  </div>
                </div>
                <div className="column">
                  <label className="label">Last Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                    />
                  </div>
                </div>
              </div>
              <label className="label">Job Title</label>
              <div className="control has-icons-left">
                <input className="input" type="text" name="title" />
                <span className="icon is-left">
                  <i className="fas fa-user-plus"></i>
                </span>
              </div>
              <div className="columns">
                <div className="column">
                  <label className="label">Password</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                    <span className="icon is-left">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                </div>
                <div className="column">
                  <label className="label">Re-Type Password</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="password"
                      placeholder="Confirm Password"
                      name="retypePassword"
                    />
                    <span className="icon is-left">
                      <i className="fas fa-lock"></i>
                    </span>
                  </div>
                </div>
              </div>
              <button type="submit" className="button is-danger">
                Sign up
              </button>
            </form>
          </div>

          {/* 
            <form onSubmit={handleSubmit}>
              <div className="field">

                <div className="columns row-one">
                  <div className="column">
                    <label className="label" for="firstName">
                      First Name
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                      />
                    </div>
                  </div>
                  <div className="column">
                    <label className="label" for="lastName">
                      Last Name
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                      />
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <label className="label" for="password">
                      Password
                    </label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="password"
                        placeholder="Password"
                        name="password"
                      />
                      <span className="icon is-left">
                        <i classNameName="fas fa-key"></i>
                      </span>
                    </div>
                  </div>
                  <div className="column">
                    <label className="label" for="retypePassword">
                      Re-Type Password
                    </label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="password"
                        placeholder="Confirm Password"
                        name="retypePassword"
                      />
                      <span className="icon is-left">
                        <i classNameName="fas fa-lock"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="button is-primary" type="submit">
                Register
              </button>
            </form> */}
        </div>
      </div>
    </div>
  );
}

export default SignUpNew;