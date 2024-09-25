import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const MONGODB_URL = process.env.MONGODB_URL;

export async function databaseConnection() {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Database is connected successfully");
    
  } catch (error) {
    console.log(error)
    
  }
  
};

