import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  throw new Error("⚠️ MongoDB URI not found in .env file");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "uchoice", // তোমার ডাটাবেস নাম
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  (global as any).mongoose = cached;
  return cached.conn;
}
