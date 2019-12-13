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

///////////

const sampleData = {
    name: "Test",
    hate1: "Test",
    hate2: "Test",
    hate3: "Test"
}

// test route
router.get("/test", (req, res) => {
    db.collection("user")
    .doc("test-doc")
    .set(sampleData)
    .then(function() {
        res.send("Post submitted successfully!")
    })
    .catch(function(error) {
        res.send("Error writing post: ", error)
    })
})

module.exports = router; 

router.get("/", (req, res) => {
    let nameVal = req.query.name ? req.query.name : '';
    let hate1Val = req.query.hate1 ? req.query.hate1 : '';
    let hate2Val = req.query.hate2 ? req.query.hate2 : '';
    let hate3Val = req.query.hate3 ? req.query.hate3 : '';
    db.collection("user")
    .add({
        name: nameVal,
        hate1: hate1Val,
        hate2: hate2Val,
        hate3: hate3Val
    })
    .then(ref => res.send(ref))
    .catch(e => res.send(e));
})