const express = require("express");
const User = require("../models/user");

module.exports = {
  findUserById: (req, res) => {
    User.findById(req.params.id)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  },
  createUser: async (req, res) => {
    try {
      const user = new User(req.body);
      const result = await user.save();
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  updateUser: async (req, res) => {
    try {
      User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(
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
