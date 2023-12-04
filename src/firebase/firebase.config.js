// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgpddLMV9oNUAf0ESs4btmm03X-b3ZvEw",
  authDomain: "email-password-auth-42cd2.firebaseapp.com",
  projectId: "email-password-auth-42cd2",
  storageBucket: "email-password-auth-42cd2.appspot.com",
  messagingSenderId: "1068216717717",
  appId: "1:1068216717717:web:4edcd376462c13d2f5e69c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app