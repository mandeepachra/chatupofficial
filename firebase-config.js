// Firebase SDK Modules (CDN version)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// YE TERA CONFIG HAI (Ise edit karke apni details bhar dena)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmSR0Tg2ZWF11x9RIBmQSsA6br2ACTcF0",
  authDomain: "chatup-18092.firebaseapp.com",
  projectId: "chatup-18092",
  storageBucket: "chatup-18092.firebasestorage.app",
  messagingSenderId: "842832803393",
  appId: "1:842832803393:web:629b10d20ddcaeb162b8c0",
  measurementId: "G-SC0LT5DC31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporting variables taaki Signup/Login mein use ho sakein
export const db = getFirestore(app);
export const auth = getAuth(app);