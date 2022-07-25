const countmodel = require("../../models/Count.Model");
const todomodel = require("../../models/Todo.Model");
const usermodel = require("../../models/User.Model");

async function CreateTodo(req, res) {
  try {
    const { title, description, author } = req.body;
    const isUserExisit = await usermodel.findOne({ _id: author });
    if (!isUserExisit)
      return res.status(400).send({ status: "failed", msg: "no user found" });

    const newTodo = await todomodel.create({
      title,
      description,
      author,
    });
    const isCountPresnet = await countmodel.findOne({ user: author });

    if (isCountPresnet) {
      const UpdatedCount = await countmodel.findOneAndUpdate(
        { user: author },
        { $inc: { create: 1 } },
        { new: true }
      );
      return res.send({ newTodo, countRecord: UpdatedCount });
    }

    const countRecord = await countmodel.create({
      user: author,
      create: 1,
    });

    return res.send({ newTodo, countRecord });
  } catch (error) {
    return console.error(
      "something wen't wrong in /controller/Todos/todo.create.controller.js " +
        error
    );
  }
}

module.exports = CreateTodo;
