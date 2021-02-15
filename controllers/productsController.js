const express = require("express");
// const router = express.Router();
const Product = require("../models/product");

module.exports = {
  findAllProducts: (req, res) => {
    Product.find()
      .then((products) => {
        res.json(products);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  },
  createProduct: async (req, res) => {
    try {
      const product = new Product(req.body);
      const result = await product.save();
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      Product.findByIdAndDelete(req.params.id).then((result) => {
        // res.json(result);
        console.log(result);
      });
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

// router.get("/", (req, res) => {
//   Product.find()
//     .then((products) => {
//       res.json(products);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).end();
//     });
// });

// router.post("/", (req, res) => {
//   console.log(req.body);
//   Product.create(req.body).then((newProduct) => {
//     console.log(newProduct);
//     res.json(newProduct);
//   });
// });

// router.put("/:id", (req, res) => {
//   Product.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
//     (updatedObject) => {
//       res.json(updatedObject);
//     }
//   );
// });

// router.delete("/:id", (req, res) => {
//   Product.findByIdAndDelete(req.params.id).then((result) => {
//     res.json(result);
//   });
// });

// module.exports = router;
