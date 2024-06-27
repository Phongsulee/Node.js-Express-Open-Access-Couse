const express = require('express');
const productsRouter = express.Router();
const products = require("./data/products.json");

productsRouter.route("/").get((req, res) => {
    //res.send("Hello World !! I'm Torza-0");
    res.render("products",{
        products,
    }
    );
});

productsRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.render("product", {
        product: products[id],
    })
});


module.exports = productsRouter;