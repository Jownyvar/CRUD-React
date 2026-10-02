// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyW_ooBGALds7l8AYZ_oOqjhYNMyo9-oE",
  authDomain: "delete-agad.firebaseapp.com",
  projectId: "delete-agad",
  storageBucket: "delete-agad.firebasestorage.app",
  messagingSenderId: "1048040657042",
  appId: "1:1048040657042:web:f23db1df7f9c988320164b",
  measurementId: "G-HMMS0YYSBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
