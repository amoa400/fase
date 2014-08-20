"use strict";

// require
var Validator = require('./validator.js');

/** 
 * Fase Class
 * a tool library of node.js for building app fast & simple & efficient
 *
 */
var Fase = function() {
	console.log(typeof this);

	opt = opt || {};
	opt.lang = opt.lang || 'en';

	this.validator = this.v = new Validator(opt);
};
module.exports = Fase;

/** 
 * config
 *
 * @param {Object} options
 *
 */
Fase.prototype.config = function(opt) {
}

