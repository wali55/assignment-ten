// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9COAvv2oEFnJTgQhVxBvaYQ2H0tMxpeY",
  authDomain: "assignment-ten-ef009.firebaseapp.com",
  projectId: "assignment-ten-ef009",
  storageBucket: "assignment-ten-ef009.appspot.com",
  messagingSenderId: "529854722868",
  appId: "1:529854722868:web:6647470ed79a4b57a56b61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

