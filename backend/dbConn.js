import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const run = async () => {
  try {
    await mongoose.connect(process.env.mongoURI);
    console.log("Connected to DB");
  }
  catch (err) {
    console.error("Error:", err);
  }
};

export default run;

