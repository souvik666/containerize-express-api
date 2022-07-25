const countmodel = require("../../models/Count.Model");
const todomodel = require("../../models/Todo.Model");

async function updateTodo(req, res) {
  try {
    const { title, description, id } = req.body,
      isExisit = await todomodel.findOne({ _id: id });

    if (!isExisit)
      return res
        .status(400)
        .send({ status: "failed", msg: "nothing exists with that id" });
    const author = isExisit._doc.author,
      updatedTodo = await todomodel.findOneAndUpdate(
        { _id: id },
        {
          title,
          description,
        },
        {
          new: true,
        }
      ),
      UpdatedCount = await countmodel.findOneAndUpdate(
        { user: author },
        { $inc: { update: 1 } },
        { new: true }
      );

    res.send({
      updatedTodo,
      UpdatedCount,
    });
  } catch (error) {
    return console.error(
      "something wen't wrong in /controller/Todos/todo.create.controller.js " +
        error
    );
  }
}

module.exports = updateTodo;
