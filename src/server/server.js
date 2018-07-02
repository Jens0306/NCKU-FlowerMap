const express = require('express');
const os = require('os');

const app = express();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended:false});
//app.use(express.static('dist'));
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
    jsonPath = './dist/location1.json';
    returnIcon = 1;
    break;
    case 'f2':
    jsonPath = './dist/location2.json';
    returnIcon = 2;
    break;
    case 'f3':
    jsonPath = './dist/location3.json';
    returnIcon = 3;
    break;
    case 'f4':
    jsonPath = './dist/location4.json';
    returnIcon = 4;
    break;
    case 'f5':
    jsonPath = './dist/location5.json';
    returnIcon = 5;
    break;
    case 'f6':
    jsonPath = './dist/location6.json';
    returnIcon = 6;
    break;
  }
  console.log(jsonPath);
  var json = fs.readFileSync(jsonPath);
  var obj = JSON.parse(json);
  console.log(obj);
  //obj.features = [];
  var newPoint = {
    "type": "Feature",
    "properties" : {},
    "geometry" : {
      "type" : "Point",
      "coordinates" : [
        req.body.lat,
        req.body.lng
      ]
    }
  };
  obj.features.push(newPoint);
  console.log("after:");
  console.log(obj);
  var newObj = JSON.stringify(obj);
  fs.writeFileSync(jsonPath, newObj);
  res.send([obj, returnIcon]);
});

app.post('/fuck', function(req, res){
  console.log("lat="+req.body.lat);
  console.log("lng="+req.body.lng);
  res.send('fuckkkkk');
});
