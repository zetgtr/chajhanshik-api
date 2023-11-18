// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBELFs-gk3xUnIwgziGq9vhwkIkvkdMm_A",
    authDomain: "ji-toch.firebaseapp.com",
    projectId: "ji-toch",
    storageBucket: "ji-toch.appspot.com",
    messagingSenderId: "1014066303124",
    appId: "1:1014066303124:web:7e03c2a263535ebd8ee481",
    measurementId: "G-96G4CFJH6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
