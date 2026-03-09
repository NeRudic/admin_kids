import sqlite3 from "sqlite3";
import "dotenv/config";

export class DB {
  constructor(DB_PATH) {
    this.path = DB_PATH;

    this.db = new sqlite3.Database(this.path, (err) => {
      if (err) {
        throw new Error(err.message);
      } else {
        console.log("Database connected");
      }
    });
  }

  run(sql, params = []) {
    return new Promise((res, rej) => {
      this.db.run(sql, params, function (err) {
        err ? rej(err) : res({ lastID: this.lastID, changes: this.changes });
      });
    });
  }

  get(sql, params) {
    return new Promise((res, rej) => {
      this.db.get(sql, params, (err, row) => {
        err ? rej(err) : res(row);
      });
    });
  }

  all(sql, params = []) {
    return new Promise((res, rej) => {
      this.db.all(sql, params, (err, rows) => {
        err ? rej(err) : res(rows);
      });
    });
  }

  close() {
    return new Promise((res, rej) => {
      this.db.close((err) => {
        err ? rej(err) : res("Database was closed!");
      });
    });
  }
}
