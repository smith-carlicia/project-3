const express = require("express");
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
  findProductById: (req, res) => {
    Product.findById(req.params.id)
      .then((product) => {
        res.json(product);
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
      await Product.findByIdAndDelete(req.params.id);
      const result = await Product.find();
      res.json(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  updateProduct: async (req, res) => {
    try {
      Product.findByIdAndUpdate({ _id: req.params.id }, req.body).then(
        (result) => {
          console.log(result);
          res.json(result);
        }
      );
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
