import sqlite3 from "sqlite3";
import fs from "fs";
import "dotenv/config";

sqlite = sqlite3.verbose();
DB_PATH = process.env.DB_PATH ?? false;
LOG_PATH = process.env.LOG_PATH ?? path.resolve(".", "error.log");

class DB {
  constructor() {
    if (DB_PATH) {
      this.db = new sqlite.Database(DB_PATH, (err) => {
        if (err) {
          fs.appendFileSync(
            process.env.DB_PATH,
            JSON.stringify({
              timestamp: new Date().toISOString(),
              message: err.message,
              stack: err.stack,
            }) + "\n\n",
          );

          return err;
        } else {
          console.log("Database connected!");
        }
      });
    }
  }
}

// DB connection
const db = new sqlite.Database(DB_PATH, (err) => {
  if (err) {
    console.error("Database error: " + err);
  } else {
    console.log("Database connected!");
  }
});

export default db;
