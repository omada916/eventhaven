import { authenticate, writeData } from "../functions.js";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {
   getAuth,
   createUserWithEmailAndPassword,
} from "firebase/auth";
import cors from "cors";

const firebaseConfig = {
   apiKey: "AIzaSyDol293-uzm6oykcG47e_M4aOj71zG4U9U",
   authDomain: "node-project-a176d.firebaseapp.com",
   projectId: "node-project-a176d",
   storageBucket: "node-project-a176d.firebasestorage.app",
   messagingSenderId: "705351216802",
   appId: "1:705351216802:web:d16ccfa16d0f9d1da9b1fb",
   measurementId: "G-0L9BLHYXST",
};

const firebase = initializeApp(firebaseConfig);
const db = getDatabase(firebase);
const auth = getAuth(firebase);

export const signup = async (req, res) => {
   try {
      const { name, username, email, password } = req.body;
      const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegEx.test(email)) {
         console.log(`Email Error: ${email}`);
         return res.status(400).json({ error: "invalid email format" });
      }
      const newUser = {
         name,
         username,
         email,
         password,
      };

      writeData(db, `/users/${username}`, newUser);
      createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            const user = userCredential.user;
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
         });
      res.status(201);
   } catch (error) {
      console.error(error);
   }
   res.json({
      data: "Signup endpoint reached",
   });
   console.log("signup requested")
};