const router = require("express").Router();
const productController = require("../../controllers/productsController");

router
  .route("/")
  .get(productController.findAllProducts)
  .post(productController.createProduct)

router
  .route("/:id")
  .put(productController.updateProduct)
  .delete(productController.deleteProduct)
  .get(productController.findProductById);

module.exports = router;
