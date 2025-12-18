const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://rssasivarnan_db_user:sasivarnan%402006@cluster0.bfkp4js.mongodb.net/myproductsDB?appName=Cluster0");
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;