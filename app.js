const express = require('express');
const app = express();
const { port } = require('./env');

const fs = require('fs');

const productList = [
    {
        sku: "345-789-90",
        name: "Head First java",
        author: "Bert bates, Kathy Sierra"
    },
    {
        sku: "345-789-91",
        name: "NodeJS in Action",
        author: "Mike Cantelton, Marc Harter"
    }
];

const requestTimeHandler = (req, res, next) => {
    const currentDateTime = new Date();
    currentDateTime.setDate(currentDateTime.getDate()-1);
    req.incomingTime = currentDateTime;
    next();
}

const requestLogger = (req, res, next) => {
    const logData = `${req.incomingTime}   ${req.method}  http://localhost:${port}${req.url}`+`\n`;
    fs.appendFile('./log.txt', logData, (err, data) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
        }
    });
    next();
}

app.use([requestTimeHandler, requestLogger, express.json()]);

app.get("/details/:id", (req, res, next) => {
    if(req.params.id <= 0) {
        next('route');
    }
    else{
        next();
    }
}, (req, res)=>{
    res.send(productList.filter(product=>product.sku === req.params.id))
});

app.get("/details/:id", (req, res, next) => {
    res.status(400).send('Bad Request!');
});

app.get("/home", (req, res) => {
    res.send(productList);
});

app.get('/', (req, res) => {
    console.log(req.currentTime);
    res.end("Hello World!");
});

app.listen(port || 3000);