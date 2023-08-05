// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDsHIyOUW6szjzanyZvlo0bwcK9wKqcnpQ",
    authDomain: "pet-cat-66377.firebaseapp.com",
    projectId: "pet-cat-66377",
    storageBucket: "pet-cat-66377.appspot.com",
    messagingSenderId: "733528070533",
    appId: "1:733528070533:web:b7840bafcc18b919f1ccec"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export default auth;