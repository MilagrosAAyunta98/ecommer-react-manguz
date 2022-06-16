// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZJyGncndhi4iD_J7WNl0XUylGhIAOwm8",
  authDomain: "react-ecommers-manguz.firebaseapp.com",
  projectId: "react-ecommers-manguz",
  storageBucket: "react-ecommers-manguz.appspot.com",
  messagingSenderId: "282034584355",
  appId: "1:282034584355:web:198acdc7d9d14b7ab76a96",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firestore initialze
const db = getFirestore(app)


export default db