import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MongoURL = process.env.MONGODB_URL;
console.log("MongoURL",MongoURL)
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MongoURL);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};