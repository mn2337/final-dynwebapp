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

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

router.get("/:id", (req, res) => {
	let queryId = req.params.id;
	let docRef = db.collection("user").doc(queryId);
	docRef
	.get()
	.then(doc => res.send(doc.data()))
	.catch(error => res.send(error))
});

module.exports = router;