// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABUTwzxspbXYJazz7ia0X5KOdVmPHd3ks",
    authDomain: "ecommence-react-5717c.firebaseapp.com",
    projectId: "ecommence-react-5717c",
    storageBucket: "ecommence-react-5717c.appspot.com",
    messagingSenderId: "559896411391",
    appId: "1:559896411391:web:8ead7776075f29cd9720ca",
    measurementId: "G-CQRCQ9LLEQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

