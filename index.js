'use strict';
const Filter = require('broccoli-filter');
const SVGO = require('svgo');

module.exports = class extends Filter {
	constructor(inputTree, options) {
		super(inputTree);

		this.inputTree = inputTree;
		this.svgo = new SVGO(options);
	}

	get extensions() {
		return ['svg'];
	}

	get targetExtension() {
		return 'svg';
	}

	processString(text) {
		return this.svgo.optimize(text).then(result => result.data);
	}
};
