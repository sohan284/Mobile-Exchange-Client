// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyB6fyAQ4hHH9U52QHMSQ76H7JuFvms4YL0",
  authDomain: "mobile-exchange-9e21b.firebaseapp.com",
  projectId: "mobile-exchange-9e21b",
  storageBucket: "mobile-exchange-9e21b.appspot.com",
  messagingSenderId: "114071673523",
  appId: "1:114071673523:web:febcdf1ee8c98ab6536ec6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;