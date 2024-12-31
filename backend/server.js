import express from "express";
import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getData, writeData } from "./functions.js";

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
const firebase = initializeApp(firebaseConfig);
const db = getDatabase(firebase);


dotenv.config();
const PORT = process.env.PORT;


app.use(express.json());
var body;
app.post("/api/write", (req, res) => {
    body = req.body
    console.log(`write: ${body}`);
    writeData(db, body.path, body.data);
});
app.post("/api/read", (req, res) => {
    body = req.body
    console.log(`read: ${body}`);
    getData(db, body.path, body.data);
});
app.use(express.static("./frontend/dist"));
app.get("/", (req, res) => {
    res.sendFile();
});

app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
});