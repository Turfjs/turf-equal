var test = require('tape'),
    equal = require('../'),
    fs = require('fs');

test('equal -- points', function(t) {
    var points = JSON.parse(fs.readFileSync(__dirname+'/fixtures/in/points.json'));

    t.ok(equal(points[0], points[0]), '=== same object')
    t.ok(equal(points[0], points[1]), 'deep equal')
    t.notOk(equal(points[0], points[2]), 'not equal')
    t.end();
});

test('equal -- polygons', function (t) {
    var polys = JSON.parse(fs.readFileSync(__dirname+'/fixtures/in/polygons.json'));

    t.ok(equal(polys[0], polys[0]), '=== same object')
    t.ok(equal(polys[0], polys[1]), 'deep equal')
    t.notOk(equal(polys[0], polys[2]), 'not equal')
    t.ok(equal(polys[0], polys[3]), 'polygon winding')
    t.ok(equal(polys[0], polys[4]), 'different starting point')

    t.end();
});
