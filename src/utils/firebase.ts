// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD_sYbrBf9MSq8L7xJDwL7nPjETlPMhU3o",
    authDomain: "ex-firebase-7055c.firebaseapp.com",
    projectId: "ex-firebase-7055c",
    storageBucket: "ex-firebase-7055c.firebasestorage.app",
    messagingSenderId: "470502752657",
    appId: "1:470502752657:web:a3f9611ad14144548dda30"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };