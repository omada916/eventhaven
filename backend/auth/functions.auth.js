import { writeData } from "../functions.js";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
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
   console.log("signup requested");
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
            // Signed up
            const user = userCredential.user;
            // ...
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
         });
      res.status(201);
   } catch (error) {
      console.error(error);
   }
   res.json({
      data: "Signup endpoint reached",
   });
};

export const login = async (req, res) => {
   const { idToken } = req.body;
   if (!idToken) return res.status(400).send("Token required");

   res.cookie("authToken", idToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
   });
   res.send("User logged in successfully");
};

function setCookie(res, name, value, days) {
   const serializedCookie = cookie.serialize(name, value, {
      maxAge: days * 24 * 60 * 60,
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "None",
   });
   res.setHeader("Set-Cookie", serializedCookie);
}

export const verifyToken = async (req, res, next) => {
   const token = req.cookies.authToken;
   if (!token) return res.status(401).send("Unauthorized");

   try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      req.user = decodedToken;
      next();
   } catch (error) {
      res.status(401).send("Invalid token");
   }
};
