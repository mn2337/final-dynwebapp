import React from 'react';
import { LoginForm }  from '../../components/LoginForm';
const firebase = require('firebase');

export default function Signup() {
  var user = firebase.auth().currentUser;
  var newPassword = getASecureRandomPassword();

  user.updateEmail("user@example.com")
    .then(function() {
      //somehow link it to the input
      user.sendEmailVerification()
    })
    .catch(function(error) {
        return error;
    });

  user.updatePassword(newPassword)
    .then(function() {
      //somehow link it to the input
    })
    .catch(function(error) {
      return error;
    });

  return (
    <div><h1>Sign up for Hatebook!</h1></div>
    <div>
      <LoginForm />
    </div>
  );
}