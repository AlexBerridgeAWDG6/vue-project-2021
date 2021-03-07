import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional 
const firebaseConfig = { /**alex config */
  apiKey: "AIzaSyBiBWMw1OJ1RPs5njdqa7e2nMOZFLpMaZE",
  authDomain: "myocardio-abaw6.firebaseapp.com",
  projectId: "myocardio-abaw6",
  storageBucket: "myocardio-abaw6.appspot.com",
  messagingSenderId: "50281309479",
  appId: "1:50281309479:web:a5f386b3fb94e91ba0f502",
  measurementId: "G-HLBZ4TW612"
};
  //initialize firebase
  firebase.initializeApp(firebaseConfig);
  const firebaseAuthentication = firebase.auth();
  const firebaseFireStore = firebase.firestore();

  export { firebaseAuthentication, firebaseFireStore, firebase};

