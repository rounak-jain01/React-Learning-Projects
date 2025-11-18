// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCog_JzvfqGGW3yqhDJgvTTYgxj0o8MXVY",
  authDomain: "react-contacepage.firebaseapp.com",
  projectId: "react-contacepage",
  storageBucket: "react-contacepage.firebasestorage.app",
  messagingSenderId: "51323549294",
  appId: "1:51323549294:web:d8f67eb2a6b7853df7d87f",
  measurementId: "G-CV11FHJMGM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
