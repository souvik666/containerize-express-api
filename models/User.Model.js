const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: Number },
});

const usermodel = mongoose.model("usermodel", userSchema);
module.exports = usermodel;
