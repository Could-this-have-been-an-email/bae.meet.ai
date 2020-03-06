import React, { useState, useEffect } from 'react';
import API from '../../utils/API';

function Login() {
  const handleSubmit = e => {
    e.preventDefault();
    let checkedUser = {
      email: e.target.email.value,
      password: e.target.password.value
    };

    API.checkUser(checkedUser)
      .then(result => {
        console.log('results', result);
        window.location.replace(`/user/${result.data._id}`);
      })
      .catch(err => {
        console.log(err);
        alert('wrong login, will style later');
      });
  };

  API.getUserAuthen((req, res) => {
    console.log('touchdown res res', res);
  });
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div>
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Login to your account
            </h2>
          </div>
          <form className="mt-8" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm">
              <div>
                <input
                  aria-label="Email address"
                  name="email"
                  type="email"
                  required
                  className="input mb-3"
                  placeholder="Email address"
                  // onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="-mt-px">
                <input
                  aria-label="Password"
                  name="password"
                  type="password"
                  required
                  className="input"
                  placeholder="Password"
                  // onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="button is-fullwidth is-warning"
                // className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
