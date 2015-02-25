var equals = require('./');
var otherequals = new(require('geojson-equality'));
var Benchmark = require('benchmark');
var fs = require('fs');


var p1 = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [38,-33],
        [38,-31],
        [42,-31],
        [42,-33],
        [38,-33]
      ]
    ]
  }
};

var p2 = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [38,-31],
        [42,-31],
        [42,-33],
        [38,-33],
        [38,-31]
      ]
    ]
  }
};



var suite = new Benchmark.Suite('turf-simplify');
suite
  .add('turf-equals',function () {
    equals(p1, p2);
  })
  .add('geojson-equality',function () {
    otherequals.compare(p1, p2);
  })
  .add('geojson-equality#dup-objectequality', function () {
    if (p1 == p2) return true;
    otherequals.compare(p1, p2);
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {

  })
  .run();
