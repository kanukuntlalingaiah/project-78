import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
var firebaseConfig = {
    apiKey: "AIzaSyDcU82_h2VPxIlE4FlbEqkmWsqDCoxsQxs",
    authDomain: "e-ride-63b2d.firebaseapp.com",
    projectId: "e-ride-63b2d",
    storageBucket: "e-ride-63b2d.appspot.com",
    messagingSenderId: "151987216329",
    appId: "1:151987216329:web:b130a6722ed47e4bbf1218"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


