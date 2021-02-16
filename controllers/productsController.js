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
        console.log(result);
        res.json(result);
      });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  updateProduct: async (req, res) => {
    try {
      Product.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
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