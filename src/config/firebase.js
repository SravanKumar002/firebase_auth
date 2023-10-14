
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCmXlMuvmT1MK_9hJdJVvQDHvX9QYlDQAQ",
  authDomain: "fir-auth-b1fd4.firebaseapp.com",
  projectId: "fir-auth-b1fd4",
  storageBucket: "fir-auth-b1fd4.appspot.com",
  messagingSenderId: "226352987361",
  appId: "1:226352987361:web:43ca9544d72eb71c134ba0",
  measurementId: "G-Y1GVZ5F95E"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider(); 
export const db = getFirestore(app);
export const storage = getStorage(app);