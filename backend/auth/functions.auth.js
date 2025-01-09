import { authenticate, writeData, getData } from "../functions.js";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {
   getAuth,
   createUserWithEmailAndPassword,
} from "firebase/auth";
import cors from "cors";
import fetch from "node-fetch";

const firebaseConfig = {
   apiKey: "AIzaSyDol293-uzm6oykcG47e_M4aOj71zG4U9U",
   authDomain: "node-project-a176d.firebaseapp.com",
   projectId: "node-project-a176d",
   storageBucket: "node-project-a176d.firebasestorage.app",
   messagingSenderId: "705351216802",
   appId: "1:705351216802:web:d16ccfa16d0f9d1da9b1fb",
   measurementId: "G-0L9BLHYXST",
};
const SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`;
const UPDATE_PROFILE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${firebaseConfig.apiKey}`;

const firebase = initializeApp(firebaseConfig);
const db = getDatabase(firebase);
const auth = getAuth(firebase);

async function signUp(req, res) {
   const { name, username, email, password } = req.body;
   try {
      const response = await fetch(SIGN_UP_URL, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
         }),
      });

      const data = await response.json();
      if (!response.ok) {
         throw new Error(data.error.message);
      }

      console.log('User signed up successfully!');
      return data; // Contains idToken, refreshToken, and localId (UID)
   } catch (error) {
      console.error('Error signing up:', error.message);
      throw error;
   }
}

// Function to set the user's display name
async function setDisplayName(idToken, displayName) {
   try {
      const response = await fetch(UPDATE_PROFILE_URL, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            idToken: idToken,
            displayName: displayName,
            returnSecureToken: true,
         }),
      });

      const data = await response.json();
      if (!response.ok) {
         throw new Error(data.error.message);
      }

      console.log('Display name set successfully!');
      return data; // Contains updated user info
   } catch (error) {
      console.error('Error setting display name:', error.message);
      throw error;
   }
}

export const signup = async (req, res) => {
   try {
      const signUpData = await signUp(req, res);
      const idToken = signUpData.idToken;

      await setDisplayName(idToken, req.body.username);
   } catch (error) {
      console.error('Error:', error.message);
   }
}