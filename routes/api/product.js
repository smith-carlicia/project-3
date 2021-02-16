const router = require("express").Router();
const productController = require("../../controllers/productsController");

router
  .route("/")
  .get(productController.findAllProducts)
  .post(productController.createProduct)

router.route("/:id").put(productController.updateProduct)
router.route("/:id").delete(productController.deleteProduct)

module.exports = router;
