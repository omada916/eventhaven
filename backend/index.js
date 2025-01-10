import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routers/auth.router.js";
import eventRoutes from "./routers/events.router.js"
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import { fileURLToPath } from "url";


const app = express();

dotenv.config();
const PORT = process.env.PORT;
const state = process.env.state;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(cookieParser());
app.use(express.static("./frontend/dist"));
app.use(express.json({ limit: "5mb" }));
app.use("/auth", authRoutes);
app.use("/events", eventRoutes);
/* ADD IN PROD
app.use(
   cors({
      origin: "http://localhost:3000",
      credentials: true,
   })
);
*/

app.get("/", (req, res) => {
   console.log("user on root")
});

app.get("*", (req, res) => {
   //404, KEEP AT END
   res.sendFile(path.join(__dirname, "../frontend/404/index.html"));
});

app.listen(PORT, () => {
   //remove before development i think idk
   console.log(`Server on ${PORT}`);
});
