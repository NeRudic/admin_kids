import sqlite3 from "sqlite3";
sqlite3.verbose();

const db = function (db_path) {
  return new sqlite3.Database(db_path, (err) => {
    if (err) {
      throw new Error(err.message);
    } else {
      console.log("Database connected");
    }
  });
};

export default db;
