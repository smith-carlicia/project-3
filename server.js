const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const routes = require("./routes");
const passport = require("./config/passport");
const session = require("express-session");

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(express.static("client/build"));
app.use(passport.session({
  secret: 'username',
  resave: false, 
  saveUninitialized: false 
}));
app.post('./user', (req,res) => {
  console.log('user signup');
  req.session.username = req.body.username;
  res.end()
})
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project-3", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected!");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.use(routes);

// const ProductsController = require("./controllers/productsController");

// app.use("/api/products", ProductsController);

// app.get("/api/config", (req, res) => {
//   res.json({
//     success: true,
//   });
// });

// app.get("*", (req, res) => {
//   res.sendFile(path.join(_dirname, "client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
