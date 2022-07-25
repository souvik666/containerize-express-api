require("dotenv").config();
const { default: mongoose } = require("mongoose");

const mogno_uri = process.env.mogno_uri || "mongodb://127.0.0.1:27017";
async function Connection() {
  try {
    console.log("Db_Connected");
    return await mongoose.connect(mogno_uri);
  } catch (error) {
    console.error("error in /config/db.js " + error);
  }
}

module.exports = Connection;
