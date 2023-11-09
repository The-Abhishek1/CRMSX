// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC73_iUmAMCzeKlbAQonHSy2oVpDOSNr2I",
  authDomain: "crms-x.firebaseapp.com",
  projectId: "crms-x",
  storageBucket: "crms-x.appspot.com",
  messagingSenderId: "111395023521",
  appId: "1:111395023521:web:4d33dfe8bb4f495da5dee0",
  measurementId: "G-3T8238QGX9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//npm install firebase
//npm install -g firebase-tools
//firebase login
//firebase init
//firebase deploy
