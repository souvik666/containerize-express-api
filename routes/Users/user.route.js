const express = require("express");
const { body } = require("express-validator");

const userCreateController = require("../../controllers/users/user.create.controller");

const userRouter = express.Router();

userRouter.post(
  "/",

  body("email").isEmail(),
  body("name").isLength({ min: 3, max: 10 }),
  body("phone").isMobilePhone(),
  userCreateController
);

module.exports = userRouter;
