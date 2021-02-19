const router = require("express").Router();
const userController = require("../../controllers/userController");

router
  .route("/")
  .post(userController.createUser)

router
  .route("/:id")
  .put(userController.updateUser)
  .get(userController.findUserById);

module.exports = router;
