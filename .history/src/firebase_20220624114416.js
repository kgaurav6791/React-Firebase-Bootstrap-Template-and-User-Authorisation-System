// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbh7Yt099KlskH4ODb288XxwCw-z7PKbs",
  authDomain: "brinks-global-dev.firebaseapp.com",
  projectId: "brinks-global-dev",
  storageBucket: "brinks-global-dev.appspot.com",
  messagingSenderId: "1060769570490",
  appId: "1:1060769570490:web:d2814e74f792494172ec83",
  measurementId: "G-GR4KLE9QKS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
