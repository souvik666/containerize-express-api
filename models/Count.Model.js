const { default: mongoose } = require("mongoose");

const countSchmea = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "usermodel" },
  create: { type: Number, default: 0 },
  update: { type: Number, default: 0 },
});

const countmodel = mongoose.model("countmodel", countSchmea);
module.exports = countmodel;
