'use strict';
var Filter = require('broccoli-filter');
var SVGO = require('svgo');

function SvgoFilter(inputTree, options) {
	if (!(this instanceof SvgoFilter)) {
		return new SvgoFilter(inputTree, options);
	}

	Filter.call(this, inputTree);

	this.inputTree = inputTree;
	this.svgo = new SVGO(options);
}

SvgoFilter.prototype = Object.create(Filter.prototype);
SvgoFilter.prototype.constructor = SvgoFilter;

SvgoFilter.prototype.extensions = ['svg'];
SvgoFilter.prototype.targetExtension = 'svg';

SvgoFilter.prototype.processString = function (str) {
	return this.svgo.optimize(str).then(result => result.data);
};

module.exports = SvgoFilter;
