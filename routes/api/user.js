const jwt = require("jsonwebtoken");
const router = require("express").Router();
const userController = require("../../controllers/userController");


router
  .route("/")
  .post(userController.createUser, function (req, res) {
    if (req.user) {
      const token = jwt.sign({ _id: req.user._id }, process.env.JWT_SIGNATURE, {
        expiresIn: 60 * 60,
      });
      res.json({
        token: token,
        type: req.user.userType,
        id: req.user._id,
        name: req.user.firstName,
      });
    }
  });

router
  .route("/:id")
  .put(userController.updateUser)
  .get(userController.findUserById);

module.exports = router;
