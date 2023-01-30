// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5kFBXDFWawUrjzB7HuR2usPH6piqfUgM",
  authDomain: "crwn-clothing-db-8583f.firebaseapp.com",
  projectId: "crwn-clothing-db-8583f",
  storageBucket: "crwn-clothing-db-8583f.appspot.com",
  messagingSenderId: "624012858345",
  appId: "1:624012858345:web:e340554aaa46d7849bf178",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
