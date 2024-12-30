import express from "express";
import dotenv from "dotenv";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDol293-uzm6oykcG47e_M4aOj71zG4U9U",
    authDomain: "node-project-a176d.firebaseapp.com",
    projectId: "node-project-a176d",
    storageBucket: "node-project-a176d.firebasestorage.app",
    messagingSenderId: "705351216802",
    appId: "1:705351216802:web:d16ccfa16d0f9d1da9b1fb",
    measurementId: "G-0L9BLHYXST",
};
const fbapp = initializeApp(firebaseConfig);
dotenv.config();
const PORT = process.env.PORT;

var app = express();
app.use(express.static("./client"));
app.use(express.json());

app.post("/api/endpoint", (req, res) => {
    res.status(200).json({ msg: "recieved" });
    console.log(req.body.request);
});

app.get("/", (req, res) => {
    res.sendFile();
});

app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
});
