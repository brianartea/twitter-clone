// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBFNQJVhCwPze1xHSZPaSajcs5sx-Vn6U",
  authDomain: "twitter-clone-6e9d2.firebaseapp.com",
  projectId: "twitter-clone-6e9d2",
  storageBucket: "twitter-clone-6e9d2.appspot.com",
  messagingSenderId: "969523440965",
  appId: "1:969523440965:web:cc0f3cd9514846b32ca22c",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
