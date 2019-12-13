import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import './App.css';
import * as firebase from "firebase/app";
import "firebase/auth";

import Header from './components/Header';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Signup from './pages/Signup';
import Logout from './pages/Logout';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const firebaseConfig = {
    apiKey: "AIzaSyAs7SQ3tvQ5UTSAbAFAjrmiMUyHMqZiv0s",
    authDomain: "dw-ex5-7afe8.firebaseapp.com",
    databaseURL: "https://dw-ex5-7afe8.firebaseio.com",
    projectId: "dw-ex5-7afe8",
    //storageBucket: "dw-ex5-7afe8.appspot.com",
    //messagingSenderId: "481727065991",
    //appId: "1:481727065991:web:8116e08c9744dfa243ed22"
  };


  function createAccountFunction(e){
    e.preventDefault()
    let email = e.currentTarget.createEmail.value;
    let password = e.currentTarget.createPassword.value;

  }

  useEffect(() => {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .catch(function(error) {
          console.log("error", error);
        });
    }, [firebaseConfig]);

  function loginFunction(){
    useEffect(() => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          setLoggedIn(true);
          setUser(user);
        } else {
          // No user is signed in.
          setLoggedIn(false);
          setUser({});
        }
        setLoading(false);
      });
   }, []);
  }

  function logoutFunction(){
    useEffect(() => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          setLoggedIn(false);
          setUser(null);
        }
        setLoading(false);
      });
   }, []);
  }

  return (
    <div className="App">
      <Header loggedIn={false} logoutFunction={logoutFunction} />
      <Router>
      <Route exact path="/dash" component={Dashboard} />
      <Route exact path="/"
        {!loggedIn ? (
          <Redirect to ="/login"/>
        ) : (
          <UserProfile user={user}/> 
        )}/>
        <Route exact path="/log-in"
          {!loggedIn ? (
          <Redirect to ="/login"/>
        )}/>
        <Route path="/sign-up" 
          {!loggedIn ? (
          <Redirect to ="/signup"/>
        ) : (
          <Redirect to ="/login"/> 
        )}/>
        <Route path="/log-out"
          <Redirect to ="/signup"/>/>
      </Router>
      <Login />
      <UserProfile />
    </div>

  );
}

export default App;
