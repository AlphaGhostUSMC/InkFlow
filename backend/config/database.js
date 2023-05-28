require('dotenv').config();
const mongoose = require('mongoose');

const muser = process.env.MONGODB_USERNAME;
const mpass = process.env.MONGODB_PASSWORD;
const db = process.env.MONGODB_DATABASE;

// MongoDB Atlas connection URI
const uri = `mongodb+srv://${muser}:${mpass}@alphadbv1.9q93m.mongodb.net/${db}?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
