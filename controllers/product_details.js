const express = require('express');
const router = express.Router();
const products_list = require('../models/products');

router.get('/details/:id', (req, res, next) => {
    const productId = req.params.id;
    if(productId <= 0) {
        next('route');
    }
    else {
        next();
    }
},(req, res, next) => {
    res.send(products_list.products.filter(p=>p.sku === req.params.id));
});

router.get('/details/:id', (req, res, next) => {
    res.status(400).send({status:400, message: 'Invalid product id'});
});

module.exports = router;