require("dotenv").config();
const { default: mongoose } = require("mongoose");

const mogno_uri = process.env.mogno_uri || "mongodb://127.0.0.1:27017";

function Connection() {
  try {
    mongoose.connect(mogno_uri, (error) => {
      if (!error) return console.log("db connected");
    });
  } catch (error) {
    console.error("error in /config/db.js " + error);
  }
}

module.exports = Connection;
