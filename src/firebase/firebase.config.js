// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD8fJA7dxX8dBxlkpofbgxZJxp7HRrDfw",
  authDomain: "the-dragon-news-b504d.firebaseapp.com",
  projectId: "the-dragon-news-b504d",
  storageBucket: "the-dragon-news-b504d.appspot.com",
  messagingSenderId: "431414509334",
  appId: "1:431414509334:web:33a56b275b5d3cbe479a37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app