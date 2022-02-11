// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server

app.post('/add', addData)
function addData(req, res) {
    newEntry = req.body
    //https://www.codegrepper.com/code-examples/javascript/how+to+push+data+in+object+javascript
    projectData.temp = newEntry.temp;
    projectData.date = newEntry.date;
    projectData.feeling = newEntry.feeling;
}
app.get('/getdata', getData)
function getData(req, res){
    res.send(projectData);
}
const port = 3000;
const server = app.listen(port, () => {
    console.log(`app listening on port ${port}!`)
});