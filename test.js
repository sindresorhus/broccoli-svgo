'use strict';
var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');

afterEach(function () {
	rimraf.sync('temp');
});

it('should minimize SVG', function () {
	var actual = fs.statSync('temp/fixture.svg').size;
	var fixture = fs.statSync('fixture/fixture.svg').size;
	assert(actual < fixture);
});
