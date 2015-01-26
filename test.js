var test = require('tape'),
    equal = require('./');

test('turf-equal', function(t) {

    var differentPoint = {
        type: 'Point',
        coordinates: [10, 0]
    };
    var pt2 = {
        type: 'Point',
        coordinates: [0, 0]
    };
    var pt = {
        type: 'Point',
        coordinates: [0, 0]
    };
    t.equal(true, equal(pt, pt), '=== same object case');
    t.equal(true, equal(pt, pt2), 'deepEqual case');
    t.equal(false, equal(pt, differentPoint), 'not equal');

    var poly = {
        type: 'Polygon',
        coordinates: [[[0, 0], [1, 1], [1, 0], [0, 0]]]
    };
    var poly2 = {
        type: 'Polygon',
        coordinates: [[[0, 0], [1, 0], [1, 1], [0, 0]]]
    };
    t.equal(true, equal(poly, poly2), 'polygon rewound case');

    t.end();
});
