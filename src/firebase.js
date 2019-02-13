import firebase from "firebase";
let x = 0;
var config = {
  apiKey: "AIzaSyCioIfLPdSgZb8MSGZ1T0TQaS-XR6QGrys",
  authDomain: "zims-design.firebaseapp.com",
  databaseURL: "https://zims-design.firebaseio.com",
  projectId: "zims-design",
  storageBucket: "zims-design.appspot.com",
  messagingSenderId: "146892583885",
};

firebase.initializeApp(config);

export default firebase;
