// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAZBwYWozXjyYxFYjilc1zbc_lEacVIfU",
    authDomain: "smart-furniture2.firebaseapp.com",
    projectId: "smart-furniture2",
    storageBucket: "smart-furniture2.appspot.com",
    messagingSenderId: "993778019457",
    appId: "1:993778019457:web:5e579cda585512a5bf3180"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(firebaseConfig)
const auth = getAuth(app);
export default auth;