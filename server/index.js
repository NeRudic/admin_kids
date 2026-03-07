import "dotenv/config";
import express from "express";
import createTable from "./src/db/index.js";

const PORT = process.env.PORT || 5000;
const app = express();

const DB_PATH = process.env.DB_PATH;

app.use(express.json());

const run = async () => {
  try {
    // Waiting for DB creating
    await createTable();

    app.listen(PORT, () => {
      console.log(`App has been started on port: ${PORT}`);
    });
  } catch (e) {
    console.log(`Unexpected error: ${e.message}`);
    process.exit(1);
  }
};

run();
