//npm node packages 
const mysql = require("mysql");
require("dotenv").config();
const fs = require("fs");
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const Nightmare = require('nightmare');
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static content for the app from the "public" directory in the application directory.
// you need this line here so you don't have to create a route for every single file in the public folder (css, js, image, etc)
//index.html in the public folder will over ride the root route
app.use(express.static("public"));

// Initializes the connection to MySQL database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  
  // Your port; if not 3306
  port: 3306,
  
  // Your username
  user: process.env.DB_USER,
  
  // Your password
  password: process.env.DB_PASSWORD,  //placeholder for your own mySQL password that you store in your own .env file
  database: process.env.DB_NAME    //TBD
});

//root route 
app.get('/', function(req, res) {
  res.send('Hello there, your root route is working!')
  console.log("getting root");
});

// route where material will be placed 
app.get('/material', function(req, res){
   res.send('material route working')
});

//route where form will be sent 

app.post('/submit', function(req, res){
   //code to run once form is submitted
})

app.post('/api', function(req, res){
    var newsURL = 'https://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=bfcf40411ab446aea8b4959454740fdc';
    var req = new Request(newsURL);
    fetch(req)
        .then(function(response) {
            console.log(response.json());
        })
    })

app.listen(3001);