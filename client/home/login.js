import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase App
const firebaseConfig = {
   apiKey: "YOUR_FIREBASE_API_KEY", // Replace with your Firebase API key
   authDomain: "your-project-id.firebaseapp.com",
   projectId: "your-project-id",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login Function
async function login() {
   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;

   try {
      // Sign in with Firebase and get an ID token
      const userCredential = await signInWithEmailAndPassword(
         auth,
         email,
         password
      );
      const idToken = await userCredential.user.getIdToken();

      // Send the token to the server for secure cookie storage
      const response = await fetch("http://localhost:5000/login", {
         method: "POST",
         credentials: "include", // Allow cookies to be sent/received
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ idToken }),
      });

      if (response.ok) {
         alert("Logged in successfully");
      } else {
         alert("Login failed: " + (await response.text()));
      }
   } catch (error) {
      alert("Error logging in: " + error.message);
      console.error(error);
   }
}

// Logout Function
async function logout() {
   try {
      // Notify the server to clear the auth cookie
      const response = await fetch("http://localhost:5000/logout", {
         method: "POST",
         credentials: "include", // Ensure the cookie is included
      });

      if (response.ok) {
         alert("Logged out successfully");
      } else {
         alert("Logout failed: " + (await response.text()));
      }
   } catch (error) {
      alert("Error logging out: " + error.message);
      console.error(error);
   }
}

// Check Profile Function (Protected Route)
async function checkProfile() {
   try {
      const response = await fetch("http://localhost:5000/profile", {
         method: "GET",
         credentials: "include", // Send the cookie to authenticate
      });

      if (response.ok) {
         alert(await response.text());
      } else {
         alert("Access denied: " + (await response.text()));
      }
   } catch (error) {
      alert("Error checking profile: " + error.message);
      console.error(error);
   }
};
