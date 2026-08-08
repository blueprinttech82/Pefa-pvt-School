import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBxdoI-kAF4mtZ0cDAOtTEaxgLmr-hlUsU",
    authDomain: "pefa-pvt-school-e8e54.firebaseapp.com",
    projectId: "pefa-pvt-school-e8e54",
    storageBucket: "pefa-pvt-school-e8e54.firebasestorage.app",
    messagingSenderId: "205323878372",
    appId: "1:205323878372:web:bf2efc387fa1e187b051f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore
const db = getFirestore(app);

// Authentication
const auth = getAuth(app);

export { db, auth };
