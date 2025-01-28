// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNFbJ_h0-ZcjKF4haspvvop72yko4f1S0",
    authDomain: "shop-online-8def2.firebaseapp.com",
    projectId: "shop-online-8def2",
    storageBucket: "shop-online-8def2.firebasestorage.app",
    messagingSenderId: "866161369812",
    appId: "1:866161369812:web:c57602ac526acda38bd141"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;