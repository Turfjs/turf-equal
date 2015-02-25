var equal = require('./');
var Benchmark = require('benchmark');
var fs = require('fs');

var points = JSON.parse(fs.readFileSync(__dirname+'/test/fixtures/in/points.json'));
var polys = JSON.parse(fs.readFileSync(__dirname+'/test/fixtures/in/polygons.json'));

var suite = new Benchmark.Suite('turf-simplify');
suite
  .add('turf-equal#Points',function () {
    equal(points[0], points[2]);
  })
  .add('turf-equal#Polygon',function () {
    equal(polys[0], polys[2]);
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {

  })
  .run();
