import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";

export function UserInformation() {
	user = firebase.auth().currentUser;
	var name, email, uid, emailVerified;

	if (user != null) {
	  name = user.displayName;
	  email = user.email;
	  emailVerified = user.emailVerified;
	  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
	}                 // this value to authenticate with your backend server, if
	  
	return <div>user</div>;
}

