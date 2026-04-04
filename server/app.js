import "dotenv/config";
import express from "express";
import router from "./routes/index.js";
import cors from "cors";
import { corsConfig } from "./config/corsConfig.js";
import { DB } from "./src/db/db.js";

//DB init
export const db = new DB(process.env.DB_PATH);

const app = express();

app.use(cors(corsConfig));
app.use(express.json());
app.use("/api", router);

export default app;
