const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mern-starter",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected!");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

const ProductsController = require("./controllers/productsController");

app.use("/api/products", ProductsController);

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(_dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
