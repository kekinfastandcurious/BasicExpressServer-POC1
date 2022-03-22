const {port} = require('./env');
const fs = require('fs');

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

module.exports.requestTimeHandler = requestTimeHandler;
module.exports.requestLogger = requestLogger;