const firebase = require("firebase");

const config = {
  apiKey: "AIzaSyAQQEGLb_9I7iet31Tzs0ql82hPpwL_K0o",
  authDomain: "fazaa-12415.firebaseapp.com",
  databaseURL: "https://fazaa-12415-default-rtdb.firebaseio.com/",
  projectId: "fazaa-12415",
  storageBucket: "fazaa-12415.appspot.com",
  messagingSenderId: "466803789786",
  appId: "1:466803789786:web:a2876d23276b502985bae3",
  measurementId: "G-6DW753R2EL"
};

const Firebase = firebase.initializeApp(config);

exports.Firebase = Firebase;
