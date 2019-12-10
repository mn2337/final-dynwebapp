import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Signup from './pages/Signup';
import Logout from './pages/Logout';

function App() {
  return (

    <div className="App">
      <Header loggedIn={false} />
      <Router>
      <Route exact path="/" component={UserProfile} />
        <Route exact path="/log-in" component={Login} />
        <Route path="/sign-up" component={Signup} />
        <Route path="/log-out" component={Logout} />
      </Router>
      <Login />
      <UserProfile />
    </div>

  );
}

export default App;
