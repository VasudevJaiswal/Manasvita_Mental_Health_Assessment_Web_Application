// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXTI9XwLF6zKbjHf1DBTrtcYi4X86cI84",
  authDomain: "manasvitaproject.firebaseapp.com",
  projectId: "manasvitaproject",
  storageBucket: "manasvitaproject.firebasestorage.app",
  messagingSenderId: "354962219639",
  appId: "1:354962219639:web:edbd86c07d6cb31e1b1c72",
  measurementId: "G-3M0YKQQMFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
