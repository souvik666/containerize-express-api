const { default: mongoose } = require("mongoose");

const todoSchema = mongoose.Schema({
  title: { type: "String" },
  description: { type: "String" },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "usermodel" },
});

const todomodel = mongoose.model("todomodel", todoSchema);

module.exports = todomodel;
