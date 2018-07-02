const express = require('express');
const os = require('os');

const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended:false});

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(8080, () => console.log('Listening on port 8080!'));

//add flower to .json file
var fs = require('fs');
app.post('/addFlower', function(req, res){
  var jsonPath, returnIcon;
  switch(req.body.flower) {
    case 'f1':
    jsonPath = './dist/json/location1.json';
    returnIcon = 1;
    break;
    case 'f2':
    jsonPath = './dist/json/location2.json';
    returnIcon = 2;
    break;
    case 'f3':
    jsonPath = './dist/json/location3.json';
    returnIcon = 3;
    break;
    case 'f4':
    jsonPath = './dist/json/location4.json';
    returnIcon = 4;
    break;
    case 'f5':
    jsonPath = './dist/json/location5.json';
    returnIcon = 5;
    break;
    case 'f6':
    jsonPath = './dist/json/location6.json';
    returnIcon = 6;
    break;
  }
  //console.log(jsonPath);
  var json = fs.readFileSync(jsonPath);
  var obj = JSON.parse(json);
  //console.log(obj);
  var newPoint = {
    "type": "Feature",
    "properties" : {},
    "geometry" : {
      "type" : "Point",
      "coordinates" : [
        req.body.lng,
        req.body.lat
      ]
    }
  };
  obj.features.push(newPoint);
  var objToWrite = JSON.stringify(obj);
  fs.writeFileSync(jsonPath, objToWrite);
  res.send([obj, returnIcon]); //return the obj before stringtify
});
var fs1 = require('fs');
app.post('/getFlower', function(req, res){
  var json1 = fs1.readFileSync('./dist/json/location1.json');
  var json2 = fs1.readFileSync('./dist/json/location2.json');
  var json3 = fs1.readFileSync('./dist/json/location3.json');
  var json4 = fs1.readFileSync('./dist/json/location4.json');
  var json5 = fs1.readFileSync('./dist/json/location5.json');
  var json6 = fs1.readFileSync('./dist/json/location6.json');
  json1 = JSON.parse(json1);
  json2 = JSON.parse(json2);
  json3 = JSON.parse(json3);
  json4 = JSON.parse(json4);
  json5 = JSON.parse(json5);
  json6 = JSON.parse(json6);
  //console.log(json1);
  var arr = [json1, json2, json3, json4, json5, json6];
  res.send(arr);
});
