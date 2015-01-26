# turf-equal

[![build status](https://secure.travis-ci.org/Turfjs/turf-equal.png)](http://travis-ci.org/Turfjs/turf-equal)

determine whether two geojson objects are equal


### `turf.equal(a, b)`

Determine whether two GeoJSON objects are equal to each other.


### Parameters

| parameter | type    | description      |
| --------- | ------- | ---------------- |
| `a`       | GeoJSON | the first object |
| `b`       | GeoJSON | the first object |


### Example

```js
// turf.equal(turf.point([0,0]), turf.point([1,1]))
```


**Returns** `Boolean`, true, if the objects are equal, false if not.

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-equal
```

## Tests

```sh
$ npm test
```

