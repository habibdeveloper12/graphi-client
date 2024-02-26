// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsz9LWO7XrkcfDtDjmH8kBf9fdF9gusPA",

  authDomain: "graphi-ba9fb.firebaseapp.com",

  projectId: "graphi-ba9fb",

  storageBucket: "graphi-ba9fb.appspot.com",

  messagingSenderId: "937813803125",

  appId: "1:937813803125:web:9c1d8534c8a6616390b83c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
