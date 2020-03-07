import React from 'react';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import Logo from './Lookin good.png';
import"./style.css"

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

  // API.getUserAuthen((req, res) => {
  //   console.log('touchdown res res', res);
  // });


  return (
    <div className="body">
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <img src={Logo} height="300" width="300" />
        <div className="max-w-md w-full px-50 py-50 card-background">
          <div>
            <h2 className="mt-6 text-center text-2xl leading-9 font-extrabold text-gray-900">
              Productive meetings = Happier people
            </h2>
            <div className="mt-2 text-center text-l text-gray-900">
              Login to a better workplace
            </div>
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
                />
              </div>
            </div>

            <div className="mt-6">
              <button type="submit" className="button is-fullwidth is-warning">
                Login
              </button>
            </div>
          </form>
          <div className="mt-2 text-center text-l text-gray-900">
              Not a member? <Link to="/signup"> Sign Up</Link>
          </div>
        </div>
        
      </div>
     
    </div>
  );
}

export default Login;
