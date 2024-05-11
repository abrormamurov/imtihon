// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbm4PQjyo-SvpEosU_6j-IusUPmtFXN7c",
  authDomain: "money-66736.firebaseapp.com",
  databaseURL:
    "https://money-66736-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "money-66736",
  storageBucket: "money-66736.appspot.com",
  messagingSenderId: "590461524394",
  appId: "1:590461524394:web:9a9c68bc1cffbe9d7533d3",
  measurementId: "G-SQPZZBBGCM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
