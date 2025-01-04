import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, getIdToken } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDol293-uzm6oykcG47e_M4aOj71zG4U9U",
   authDomain: "node-project-a176d.firebaseapp.com",
   projectId: "node-project-a176d",
   storageBucket: "node-project-a176d.firebasestorage.app",
   messagingSenderId: "705351216802",
   appId: "1:705351216802:web:d16ccfa16d0f9d1da9b1fb",
   measurementId: "G-0L9BLHYXST",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login Function
async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await storeIdToken(user); // Store the ID Token in a cookie
        toggleLoginStatus(true);
    } catch (error) {
        alert('Error: ' + error.message);
    }
}

// Sign-Up Function
async function signUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Sign-up successful! Please log in.');
    } catch (error) {
        alert('Error: ' + error.message);
    }
}

// Store the Firebase ID Token in a cookie
async function storeIdToken(user) {
    const idToken = await getIdToken(user);
    document.cookie = `auth_token=${idToken}; path=/; HttpOnly`;  // Securely store the token in a cookie
}

// Event Creation Function
async function createEvent() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const location = document.getElementById('location').value;

    const eventData = { title, description, date, location };

    try {
        const response = await fetch('http://localhost:5000/create-event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',  // Send cookies (auth_token)
            body: JSON.stringify(eventData),
        });

        const result = await response.json();
        if (response.ok) {
            alert('Event created successfully');
        } else {
            alert('Failed to create event: ' + result.message);
        }
    } catch (error) {
        alert('Error: ' + error.message);
    }
}

// Toggle visibility based on login status
function toggleLoginStatus(isLoggedIn) {
    if (isLoggedIn) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('create-event').style.display = 'block';
    } else {
        document.getElementById('login').style.display = 'block';
        document.getElementById('create-event').style.display = 'none';
    }
}

// Listen for user authentication state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        toggleLoginStatus(true);
    } else {
        toggleLoginStatus(false);
    }
});