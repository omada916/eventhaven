import { signup } from "../auth/functions.auth.js"
import { authenticate } from "../functions.js";
import express from "express";

const router = express.Router();

router.post("/signup", signup);

export default router;