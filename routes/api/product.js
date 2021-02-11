const router = require("express").Router();
const productController = require("../../controllers/productsController");

router.route('/')
    .get(productController.findAllProducts)
    .post(productController.createProduct)

module.exports = router;