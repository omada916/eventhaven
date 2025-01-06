import { getDatabase } from "firebase/database";
import app from "./app.js"

const db = getDatabase(app);

export default db;