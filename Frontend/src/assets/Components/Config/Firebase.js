import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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

export const auth = getAuth(app);
export const signinGoogle = new GoogleAuthProvider(app);
export const signinFacebook = new FacebookAuthProvider(app);
export const signinGithub = new GithubAuthProvider(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

//firebase login
//firebase init
//firebase deploy
