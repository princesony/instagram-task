// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYpYENklKVaBVQDdOMDb2KK1vG5TQ9X-s",
  authDomain: "authentication-531c2.firebaseapp.com",
  projectId: "authentication-531c2",
  storageBucket: "authentication-531c2.appspot.com",
  messagingSenderId: "683637948897",
  appId: "1:683637948897:web:00cad4c6673fef05e512a0",
  measurementId: "G-0MC0VYV89V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
