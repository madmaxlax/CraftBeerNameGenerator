// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/newname", function (request, response) {
  var returnObj = {beerName:"",breweryName:""};
  returnObj.beerName = generateBeerName();
  returnObj.breweryName = generateBreweryName();
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify(returnObj));
});

function generateBeerName(){
  return getRandom(beerPrefix)+" "+getRandom(beerSuffix)+" "+getRandom(beerTypes);  
}
function generateBreweryName(){
  return getRandom(breweryNames);  
}


function getRandom(theArray){
 return theArray[Math.floor(Math.random() * theArray.length)]; 
}


// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

var breweryNames = [
'The Owl Bewery',
  'WannaHava Brewery',
  'Winnepeg Brewhouse',
  "Bob's Toolshed Brewery",
    'Goodfella Brewers',
  'Just two guys, having a good time',
];

var beerPrefix = ["Mike's","Powerful", "No-Too-Shabby",
'Wompus', 'Newtown','','','Summertime','Fireplace', 'Double-wide', 'Charm City', 'Chi-City', 'Boss Hog Brewery'
];
var beerSuffix = ["Bowling Night",'Swamp City', 'Revival','Hard','Easy', 'Good times', 'Easy Like Sunday Morning','','Tax day',
                  'Racoon','Trailer-Park','¯\\_(ツ)_/¯', 'Troll Bridge','Triple-Double', 'Chocolate Cake', 'Chad Brad Tad', 'Broski', 'Whiplash', 'Whipporwill', 'Double-Dare','Whippersnapper', 'Big Hoss'
                 ]

var beerTypes = ['Pale Ale', 'Ale', 'Saison', 'Winter Ale', 'Porter', 'Double IPA', "Cider", "Lager", "Shandy", "Weizen", "Wheat beer", 'Session IPA'];