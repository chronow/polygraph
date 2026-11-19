import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'          // ← если стили импортируются здесь


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2sbjR0F9nh81Ihb5LmdYSqlNmDuuJLJo",
  authDomain: "project-grch.firebaseapp.com",
  projectId: "project-grch",
  storageBucket: "project-grch.firebasestorage.app",
  messagingSenderId: "1025667900968",
  appId: "1:1025667900968:web:e2abe9e6b52d3a75d1771d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)