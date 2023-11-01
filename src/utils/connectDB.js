import mongoose from "mongoose";

async function connectDB() {
  if (mongoose.connection[0].readyState) return;
  mongoose.set("strickQuery",false);
  await mongoose.connect(process.env.MONGO_URL);
  console.log("connected to DB");
}
export default connectDB;