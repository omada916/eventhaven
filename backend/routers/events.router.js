import { writeData, getData, setData } from "../functions.js";
import express from "express";
import db from "../firebase/db.js";

async function createEvent(req, res) {
   console.log(req.body)
   await writeData(`/events/events/${req.body.name}`, req.body);
   res.status(200).json({ message: "created" });
}
async function increment(req, res) {
   var i = await getData("/events", "currentID");
   i = i+1
   await writeData("/events/currentID", i);
   res.status(200).json({ message: "incremented"});
}
const router = express.Router();

router.post("/create-event", createEvent);
router.post("/incrementID", increment);

export default router;