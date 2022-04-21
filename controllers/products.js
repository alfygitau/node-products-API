const Blog = require("../models/Products");

const getAllProducts = (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getSingleProducts = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const postProduct = (req, res) => {
  //   console.log(req.body);
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/all-blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { getAllProducts, getSingleProducts, postProduct };
