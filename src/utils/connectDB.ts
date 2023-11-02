import mongoose from "mongoose";

async function connectDB(): Promise<void> {
  // if (mongoose.connection[0].readyState) return;
  if (mongoose.connection.readyState !== 0) return;
  mongoose.set("strict", false);
  await mongoose.connect(process.env.MONGO_URL as string);
  console.log("connected to DB");
}
export default connectDB;
