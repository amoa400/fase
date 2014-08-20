"use strict";

// require
var Validator = require('./validator.js');

/**
 * Fase Class
 * a tool library of node.js for building app fast & simple & efficient
 *
 * @param {Object} option (lang)
 */
var Fase = function(opt) {
	opt = opt || {};
	if (typeof this !== 'object') {
		return new Fase(opt);
	}

	this.opt = {};
	this.opt.lang = opt.lang || 'en';

	this.validator = new Validator(this.opt);
};
module.exports = Fase;
