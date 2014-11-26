"use strict";

// require
var Func = require('./function.js');
var Validator = require('./validator.js');
var Definition = require('./definition.js');
var async = require('./async.js');

/**
 * Fase Class
 * a tool library of node.js for building app fast & simple & efficient
 *
 * @param {Object} option (lang)
 */
var Fase = function() {
	this.opt = {};
	this.opt.lang = 'en';

	this.func = new Func();
	this.validator = new Validator(this.opt);
	this.definition = new Definition();
	this.async = async;

	// shortcut
	this.validate = this.validator.validate.bind(this.validator);
};
module.exports = new Fase();
