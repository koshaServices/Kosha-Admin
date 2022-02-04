import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
initializeApp({
    apiKey: "AIzaSyA1totFI6IFcsTB2quw9LfJA-TkVKyaLj4",
    authDomain: "kosha-53015.firebaseapp.com",
    projectId: "kosha-53015",
    storageBucket: "kosha-53015.appspot.com",
    messagingSenderId: "770114634070",
    appId: "1:770114634070:web:8c17e492ab11a4d9b6d6f7",
});

// Initialize Firebase
const firestore = getFirestore();

export { firestore};