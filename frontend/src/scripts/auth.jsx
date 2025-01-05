import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, getIdToken } from "firebase/auth";
import { setCookie } from "./cookies";
import { request } from "./request";

const firebaseConfig = {
   apiKey: "AIzaSyDol293-uzm6oykcG47e_M4aOj71zG4U9U",
   authDomain: "node-project-a176d.firebaseapp.com",
   projectId: "node-project-a176d",
   storageBucket: "node-project-a176d.firebasestorage.app",
   messagingSenderId: "705351216802",
   appId: "1:705351216802:web:d16ccfa16d0f9d1da9b1fb",
   measurementId: "G-0L9BLHYXST",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function storeIdToken(user) {
   const idToken = await getIdToken(user);
   setCookie("token", idToken, 30);
}

export const login = async (email, password) => {
   try {
      const userCredential = await signInWithEmailAndPassword(
         auth,
         email,
         password
      );
      const user = userCredential.user;
      console.log("signin complete");
      await storeIdToken(user);
   } catch (error) {
      console.error(`Error: ${error.message}`);
   }
};

export const signup = async (name, username, email, password) => {
   const userCreationData = {
      name,
      username,
      email,
      password
   };
   await request("/auth/signup", "POST", JSON.stringify(userCreationData));
};
