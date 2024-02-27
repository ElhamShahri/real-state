import mongoose from "mongoose";
const MONGODB_URL = "mongodb://localhost:27017";

async function connectDB(): Promise<void> {
  console.log("Hi");
  // if (mongoose.connection[0].readyState) return;
  console.log(mongoose.connection.readyState);
  if (mongoose.connection.readyState !== 0) return;
  mongoose.set("strict", false);
  mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("MongoDB connected!!");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });
}
export default connectDB;
