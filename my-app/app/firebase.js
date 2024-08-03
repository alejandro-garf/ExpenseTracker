// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1nGBeaHbBxkbdFZSgGwX3gpKzK_dlccc",
  authDomain: "expense-tracker-83c95.firebaseapp.com",
  projectId: "expense-tracker-83c95",
  storageBucket: "expense-tracker-83c95.appspot.com",
  messagingSenderId: "1081433081708",
  appId: "1:1081433081708:web:10a7bc6dc55972b7c75549"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);