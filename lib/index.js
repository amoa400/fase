"use strict";

// require
var func = require('./function.js');
var validator = require('./validator.js');
var async = require('./async.js');

/**
 * Fase Class
 * a tool library of node.js for building app fast & simple & efficient
 *
 * @param {Object} option (lang)
 */
var Fase = function() {
	this.opt = {};

	// modules
	this.func = func;
	this.validator = validator;
	this.async = async;

	// shortcut
	this.validate = this.validator.validate.bind(this.validator);

	// config
	this.config({
		lang: 'en'
	});
};

/**
 * Config fase
 *
 * @param {Object} configuration
 */
Fase.prototype.config = function(opt) {
	this.opt = opt;
	this.validator.config(opt);
}

// exports
module.exports = new Fase();