import { writeData } from "../functions.js";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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
const db = getDatabase(firebase)

export const signup = async (req, res) => {
   console.log("signup requested")
   try {
      const { name, username, email, password } = req.body;
      const emailRegEx = /^[^s@]+@[^/s@]+\.[^'s@]+$/;
      if (!emailRegEx.test(email)) {
         return res.status(400).json({ error: "invalid email format" });
      }
      const newUser = {
         name,
         username,
         email,
         password,
      }

      writeData(db, `/users/${username}`, newUser)
      res.status(201);
   } catch (error) {
      console.error(error);
   }
   res.json({
      data: "Signup endpoint reached",
   });
}