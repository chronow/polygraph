import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'          // ← если стили импортируются здесь


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1QDA7hosiIKSlPdyiGgEqRze3NuH2ce0",
  authDomain: "notification-module-79e4c.firebaseapp.com",
  projectId: "notification-module-79e4c",
  storageBucket: "notification-module-79e4c.firebasestorage.app",
  messagingSenderId: "195930900861",
  appId: "1:195930900861:web:48788af7e512602e13a414",
  measurementId: "G-46SYFK7T6M"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)