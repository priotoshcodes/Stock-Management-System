const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const mongoURI = process.env.MONGO_URI; // Get Mongo URI from .env

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI); // Use the URI from .env
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;
