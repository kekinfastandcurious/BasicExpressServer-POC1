# BasicExpressServer-POC1
Following are the API endpoints which are developed using ExpressJS,
1. http://localhost:3000/home, which will list down list of all books.
2. http://localhost:3000/details/<product_id> which will return details for specific book. you can give any id from list e.g. 345-789-90

Also, middlewares developed using ExpressJS to change the request incoming time to one day prior & log them to log.txt file.

## Usage Guide
* Clone the Git Repo git@github.com:kekinfastandcurious/BasicExpressServer-POC1.git
    ```sh
    git init
    git clone git@github.com:kekinfastandcurious/BasicExpressServer-POC1.git
    git checkout -b master
    git pull origin master
    ```
    ***Note: Actual code is present on master branch***
    
* Start the basic node server
      
    ```sh
    cd BasicExpressServer-POC1
    npm install
    npm start
    ```
      
    ***Above step will start the server on port 3000.***
