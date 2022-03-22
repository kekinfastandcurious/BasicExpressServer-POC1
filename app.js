const express = require('express');
const app = express();
const { port } = require('./env');
const products = require('./models/products');
const {requestTimeHandler, requestLogger} = require('./middlewares');
const productDetails = require('./controllers/product_details');
const router = express.Router();



app.use([requestTimeHandler, requestLogger, express.json()]);

app.get('/details/:id', productDetails);

app.get("/home", (req, res) => {
    res.send(products);
});

app.get('/', (req, res) => {
    console.log(req.currentTime);
    res.end("Hello World!");
});

app.listen(port || 3000);