// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.EACT_APP_apiKey,
    // authDomain: process.env.EACT_APP_authDomain,
    // projectId: process.env.EACT_APP_projectId,
    // storageBucket: process.env.EACT_APP_storageBucket,
    // messagingSenderId: process.env.EACT_APP_messagingSenderId,
    // appId: process.env.EACT_APP_appId,


    apiKey: "AIzaSyCL40ZxYUBMl5URdoMIOTPikn3qIfaB_dY",
    authDomain: "smart-furniture-20fa9.firebaseapp.com",
    projectId: "smart-furniture-20fa9",
    storageBucket: "smart-furniture-20fa9.appspot.com",
    messagingSenderId: "160468459015",
    appId: "1:160468459015:web:697d2fc465a2d46af5d4a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;