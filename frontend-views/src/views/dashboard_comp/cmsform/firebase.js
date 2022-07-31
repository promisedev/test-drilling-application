import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBZY9BtfSFz5AvoSd_A154peSYWC0xQRRU",
  authDomain: "jaex-b9931.firebaseapp.com",
  projectId: "jaex-b9931",
  storageBucket: "jaex-b9931.appspot.com",
  messagingSenderId: "674748003695",
  appId: "1:674748003695:web:4652dfa44099820d3e249a",
  measurementId: "G-QY1MBMK400"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app)

export {storage}