var deepEqual = require('deep-equal'),
    rewind = require('geojson-rewind');
/**
 * Determine whether two GeoJSON objects are equal to each other.
 * This is a combination of simple `===` equality in JavaScript, deepEqual,
 * and rewinding GeoJSON Polygon coordinate rings to match each other, since
 * the GeoJSON spec does not require a winding order.
 *
 * @module turf/equal
 * @param {GeoJSON} a the first object
 * @param {GeoJSON} b the first object
 * @returns {Boolean} true, if the objects are equal, false if not.
 * @example
 * // turf.equal(turf.point([0,0]), turf.point([1,1]))
 */
module.exports = equal;

function equal(a, b) {
    // Comparisons below are in order of strictness and performance
    // aspect.

    // the same instance
    if (a === b) return true;

    // the same deep equal'ed
    if (deepEqual(a, b, { strict: true })) return true;

    a = rewind(JSON.parse(JSON.stringify(a)));
    b = rewind(JSON.parse(JSON.stringify(b)));

    // objects are the same but winding
    // order was different.
    if (deepEqual(a, b, { strict: true })) return true;

    return false;
}
