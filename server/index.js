import "dotenv/config";
import express from "express";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

const run = async () => {
  try {
    // Waiting for DB creating
    await createTable();

    app.listen(PORT, () => {
      console.log(`App has been started on port: ${PORT}`);
    });
  } catch (e) {
    console.log(`Uneccepted error: ${e}`);
    process.exit(1);
  }
};

run();
