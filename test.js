'use strict';
var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');

afterEach(function () {
	rimraf.sync('temp');
});

it('should minimize SVG', function () {
	assert.equal(
		fs.readFileSync('temp/fixture.svg', 'utf8'),
		fs.readFileSync('fixture/expected.svg', 'utf8')
	);
});
