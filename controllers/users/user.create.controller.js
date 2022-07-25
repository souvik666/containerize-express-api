const { validationResult } = require("express-validator");
const usermodel = require("../../models/User.Model");

async function userCreateController(req, res) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone } = req.body,
      isALreayExisit = await usermodel.findOne({ email: email });
    if (isALreayExisit)
      return res
        .status(400)
        .send({ status: "failed", msg: "user already exist" });

    const newUser = await usermodel.create({ name, email, phone });

    res.send({
      newUser,
    });
  } catch (error) {
    res
      .status(400)
      .send({ status: "failed", msg: "something wen't wrong " + error });
  }
}

module.exports = userCreateController;
