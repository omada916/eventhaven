import { writeData, getData, setData, deleteData } from "../functions.js";
import express from "express";
import db from "../firebase/db.js";

async function createPublicEvent(req, res) {
   console.log(`Public Event, ${req.body}`)
   await writeData(`/events/events/${req.body.title}`, req.body);
   res.status(200).json({ message: "created" });
}
async function increment(req, res) {
   var i = await getData("/events", "currentID");
   i = i + 1
   await writeData("/events/currentID", i);
   res.status(200).json({ message: "incremented" });
}
async function createPrivateEvent(req, res) {
   console.log(`Private Event, ${req.body}`);
   await writeData(`/users/${req.body.user}/events/${req.body.title}`, req.body)
   res.status(201);
}
async function deleteEntry(req, res) {
   console.log(`Delete Event, ${req.body}`);
   await deleteData(req.body.path);
   res.status(200);
}  
const router = express.Router();

router.post("/create-event", createPublicEvent);
router.post("/incrementID", increment);
router.post("/create-private-event", createPrivateEvent);
router.post("/delete-event", deleteEntry);

export default router;