// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD948ogwnoRPDAD9oRDBTZFSD71YilkBqg",
  authDomain: "online-job-portal-96c66.firebaseapp.com",
  projectId: "online-job-portal-96c66",
  storageBucket: "online-job-portal-96c66.firebasestorage.app",
  messagingSenderId: "1039965367040",
  appId: "1:1039965367040:web:f982c7bb8b33300ae0e1e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };