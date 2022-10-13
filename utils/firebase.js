// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMgOWgNm4RnZgAJlZaqoc220t8EancdHo",
  authDomain: "auth-1b7fc.firebaseapp.com",
  projectId: "auth-1b7fc",
  storageBucket: "auth-1b7fc.appspot.com",
  messagingSenderId: "376491722875",
  appId: "1:376491722875:web:22e6ea0a3ebed4e7d1bade",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
