import "dotenv/config";
import app, { db } from "./app.js";

const PORT = process.env.PORT || 5000;

const run = async () => {
  try {
    await db.connect();

    app.listen(PORT, () => {
      console.log(`App has been started on port: ${PORT}`);
    });
  } catch (e) {
    console.log(`Unexpected error: ${e.message}`);
    process.exit(1);
  }
};

run();
