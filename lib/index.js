"use strict";

// require
var Func = require('./function.js');
var Validator = require('./validator.js');
var Definition = require('./definition.js');

/**
 * Fase Class
 * a tool library of node.js for building app fast & simple & efficient
 *
 * @param {Object} option (lang)
 */
var Fase = function(opt) {
	opt = opt || {};
	if (!(this instanceof Fase)) {
		return new Fase(opt);
	}

	this.opt = {};
	this.opt.lang = opt.lang || 'en';

	this.func = new Func();
	this.validator = new Validator(this.opt);
	this.definition = new Definition();

	// shortcut
	this.validate = this.validator.validate.bind(this.validator);
};
module.exports = Fase;
