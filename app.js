const mongoose = require("mongoose");
const express = require("express");
const productRoute = require("./routes/productsRoutes");

const app = express();

const mongoURI =
  "mongodb+srv://alfy:gitau1992@cluster0.wmaqu.mongodb.net/node-shop?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI)
  .then((result) => {
    app.listen(5000);
    console.log("connected to the database");
  })
  .catch((err) => {
    console.log(err);
  });

// registering view engine
app.set("view engine", "ejs");

// middleware for accepting form data
app.use(express.urlencoded({ extended: true }));

app.get("/blogs/create", (req, res) => {
  res.render("newProducts");
});

app.use(productRoute);
