const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connect = async () => {
  const url= process.env.MONGO_URL;
  try {
    await mongoose.connect(url);
    return console.log('DB connection successful.');
  } catch (error) {
    return console.log('Error in connecting to DB.', error);
  }
};

module.exports = {connect}