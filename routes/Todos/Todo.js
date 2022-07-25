const express = require("express");
const CreateTodo = require("../../controllers/Todos/todo.craeate.controller");
const updateTodo = require("../../controllers/Todos/todo.update.controller");

const todoRouter = express.Router();

todoRouter.post("/", CreateTodo);
todoRouter.patch("/", updateTodo);

module.exports = todoRouter;
