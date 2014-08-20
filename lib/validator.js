"use strict";

// require
var ruleLength = require('./rules/length.js');

/**
 * Vaidator
 * validate if the data format if correct
 *
 */
var Validator = function(opt) {
	this.opt = opt;

	this.rules = {};
	this.models = {};
};
module.exports = Validator;

/**
 * create a new rule
 *
 * @param {String} rule name
 * @param {Function} validate function
 * @param {String} return type (return/callback)
 * @return {Boolean} succeed (ture/false)
 */
Validator.prototype.createRule = function(name, func, rtType) {
	name = name || 'default';
	func = func || function() {};
	rtType = rtType || 'return';

	this.rules[name] = {
		func: func,
		rtType: rtType
	};

	return true;
};

