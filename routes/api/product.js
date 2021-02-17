const router = require("express").Router();
const productController = require("../../controllers/productsController");

router
  .route("/")
  .get(productController.findAllProducts)
  .post(productController.createProduct)

router.route("/:id").put(productController.updateProduct)
  
router.route("/:id").delete(productController.deleteProduct)

router
  .route("/:id")
  .put(productController.updateProduct)
  .delete(productController.deleteProduct)
  .get(productController.findProductById);

module.exports = router;
