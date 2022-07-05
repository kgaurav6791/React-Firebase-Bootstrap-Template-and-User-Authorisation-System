import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVf4RVNIgEAURswdxutAd9KH8oZc4Qisk",
  authDomain: "auth-development-59590.firebaseapp.com",
  projectId: "auth-development-59590",
  storageBucket: "auth-development-59590.appspot.com",
  messagingSenderId: "893453326952",
  appId: "1:893453326952:web:37fe69e60d68911d2139dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
