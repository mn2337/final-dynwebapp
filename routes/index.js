const express = require('express');
const firebase = require('firebase');
const router = express.Router();

const firebaseConfig = {
    apiKey: "AIzaSyB78OU9RAr3XIwtDnOkGAszeiREfFN_TaQ",
    authDomain: "dw-final.firebaseapp.com",
    databaseURL: "https://dw-final.firebaseio.com",
    projectId: "dw-final",
    //storageBucket: "dw-final.appspot.com",
    //messagingSenderId: "841467281440",
    //appId: "1:841467281440:web:bb2ad46da6624147257c45",
    //measurementId: "G-S27SY711R8"
};

const firestoreDatabase = firebase.initializeApp(firebaseConfig);
const db = firestoreDatabase.firestore();

let posts = [];

db.collection('user')
	.get()
	.then(
		userPosts => {
			userPosts.forEach(post => {
				posts.push(post.data());
			});
			console.log('UserPosts', userPosts);
		}
	)
	.catch(err => {
		console.log('error', err)
	})


router.get('/', (req, res) => (res.send(posts)));

console.log(firebase.database());

module.exports = router;