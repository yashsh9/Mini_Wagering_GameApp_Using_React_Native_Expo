

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTSjX2PRtTEvB-v-sNue1lmNbUnfAVqIw",
    authDomain: "rnapp-6b339.firebaseapp.com",
    projectId: "rnapp-6b339",
    storageBucket: "rnapp-6b339.appspot.com",
    messagingSenderId: "520220227259",
    appId: "1:520220227259:web:4d89d7db379c50b72c9b9e",
    measurementId: "G-L38QMV6HPF"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
