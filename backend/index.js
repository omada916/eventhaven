import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routers/auth.router.js";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import cors from "cors";
import cookieParser from "cookie-parser";

const firebaseConfig = {
   apiKey: "AIzaSyDol293-uzm6oykcG47e_M4aOj71zG4U9U",
   authDomain: "node-project-a176d.firebaseapp.com",
   projectId: "node-project-a176d",
   storageBucket: "node-project-a176d.firebasestorage.app",
   messagingSenderId: "705351216802",
   appId: "1:705351216802:web:d16ccfa16d0f9d1da9b1fb",
   measurementId: "G-0L9BLHYXST",
};

const app = express();
const fb = initializeApp(firebaseConfig);
const db = getDatabase(fb);
const auth = getAuth(fb);

dotenv.config();
const PORT = process.env.PORT;
app.use(cookieParser());
app.use(express.static("./frontend/dist"));
app.use(express.json({ limit: "5mb" }));
app.use("/auth", authRoutes);
app.use(
   cors({
      origin: "http://localhost:3000",
      credentials: true,
   })
);

app.get("/", (req, res) => {
   console.log("user on root")
});

app.get("*", (req, res) => {
   //404, KEEP AT END
   res.status(404).redirect("/404");
});

app.listen(PORT, () => {
   //remove before development i think idk
   console.log(`Server on ${PORT}`);
});