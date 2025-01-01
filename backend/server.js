import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname);

import express from "express";
import dotenv from "dotenv";
import path from "path";
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getData, writeData } from "./functions.js";
import authRoutes from "./routers/auth.router.js";

const firebaseConfig = {
    apiKey: "AIzaSyDol293-uzm6oykcG47e_M4aOj71zG4U9U",
    authDomain: "node-project-a176d.firebaseapp.com",
    projectId: "node-project-a176d",
    storageBucket: "node-project-a176d.firebasestorage.app",
    messagingSenderId: "705351216802",
    appId: "1:705351216802:web:d16ccfa16d0f9d1da9b1fb",
    measurementId: "G-0L9BLHYXST",
};

const root = "/workspaces/node-project/" //configure when deploying
const app = express();
const firebase = initializeApp(firebaseConfig);
const db = getDatabase(firebase);

dotenv.config();
const PORT = process.env.PORT;
app.use(express.static("./client"))
app.use(express.json({limit: "5mb"}));
var body;

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.redirect("/home")
});

app.get("*", (req, res) => { //404, KEEP AT END
    res.status(404).redirect("/404")
});

app.listen(PORT, () => { //remove before development
    console.log(`Server on ${PORT}`);
});