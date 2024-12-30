import express from "express";
import admin from "../firebase.config";

const router = express.Router();

router.get("/data", async (req, res) => {
    try {
        const snapshot = await admin.database().ref("/dad").once("value");
        const data = snapshot.val();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error retrieving data");
    }
});

module.exports = router;

export default router;
