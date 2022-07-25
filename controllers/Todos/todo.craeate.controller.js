const todomodel = require("../../models/Todo.Model");

async function CreateTodo(req, res) {
  try {
    const { title, description, author } = req.body;

    const newTodo = await todomodel.create({
      title,
      description,
      author,
    });

    return res.send(newTodo);
  } catch (error) {
    return console.error(
      "something wen't wrong in /controller/Todos/todo.create.controller.js " +
        error
    );
  }
}

module.exports = CreateTodo;
