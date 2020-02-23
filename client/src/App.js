import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import NoMatch from './pages/NoMatch';
import User from './pages/User';
import Meeting from './pages/Meeting';
import SignUp from './pages/SignUp';
import NewMeeting from './pages/NewMeeting'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/newmeeting">
            <NewMeeting />
          </Route>
          <Route path="/meeting">
            <Meeting />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
