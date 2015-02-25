var equality = new (require('geojson-equality'));

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
module.exports = function(a, b) {
    var aGeom, bGeom;

    if (a == b) return true;

    aGeom = a.geometry ? a.geometry : a;
    bGeom = b.geometry ? b.geometry : b;

    return equality.compare(aGeom, bGeom);
}
