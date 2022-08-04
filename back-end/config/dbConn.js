const mongoose = require("mongoose");

const conn = async () => {
  try {
    const dbConn = await mongoose.connect("mongodb://0.0.0.0:27017/");
    console.log("Conectou ao banco!");

    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;
