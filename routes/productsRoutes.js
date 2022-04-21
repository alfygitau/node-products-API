const Blog = require("../models/Products");
const express = require("express");
const {getAllProducts, postProduct, getSingleProducts} = require("../controllers/products")

const router = express.Router();

router.get("/add-products", (req, res) => {
  const blog = new Blog({
    title: "cute fancy jacket 1",
    description:
      "This is a warm, cute, fancy and excellent jacket preferably worn in cold seasons",
    category: "Jackets",
    image:
      "https://4.imimg.com/data4/TB/LT/MY-15546217/men-fancy-jackets-500x500.jpg",
    price: 70,
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/all-blogs", getAllProducts);

router.get("/blogs/:id", getSingleProducts);

router.post("/blogs", postProduct);

module.exports = router;
