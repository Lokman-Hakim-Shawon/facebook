// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtJEs7MuzWYiDq0VgJZvouIvton6YCGtY",
  authDomain: "social-platform-7b2ca.firebaseapp.com",
  projectId: "social-platform-7b2ca",
  storageBucket: "social-platform-7b2ca.firebasestorage.app",
  messagingSenderId: "820471507160",
  appId: "1:820471507160:web:43d7d75323b59b298d0fad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app