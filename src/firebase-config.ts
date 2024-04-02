// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvde2W6q16h7gLeYgBijZ5Q9WRlvigbxQ",
  authDomain: "react-firebase-154c0.firebaseapp.com",
  projectId: "react-firebase-154c0",
  storageBucket: "react-firebase-154c0.appspot.com",
  messagingSenderId: "245244498771",
  appId: "1:245244498771:web:111f2fb93842d057c687a6",
  measurementId: "G-52B59J7606"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db=getFirestore(app)