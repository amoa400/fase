"use strict";

// require
var Func = require('./function.js');
var func = new Func();

var rLength = require('./rules/length.js');
var rChar = require('./rules/char.js');
var rRange = require('./rules/range.js');
var rEmail = require('./rules/email.js');
var rPhone = require('./rules/phone.js');
var rType = require('./rules/type.js');

/**
 * Vaidator
 * validate if the data format if correct
 *
 * @param {Object} option
 */
var Validator = function(opt) {
	this.opt = opt;
	this.rules = {};
	this.models = {};

	this.createDefaultRules();
};
module.exports = Validator;

/**
 * create default rules
 */
Validator.prototype.createDefaultRules = function() {
	this.createRule(rLength.name, rLength.func);
	this.createRule(rChar.name, rChar.func);
	this.createRule(rRange.name, rRange.func);
	this.createRule(rEmail.name, rEmail.func);
	this.createRule(rPhone.name, rPhone.func);
	this.createRule(rType.name, rType.func);
};

/**
 * create a new rule
 *
 * @param {String} rule name
 * @param {Function} validate function
 */
Validator.prototype.createRule = function(name, func) {
	name = name || 'default';
	func = func || function() {};

	this.rules[name] = func;
};

/**
 * create a new model
 *
 * @param {String} model name
 * @param {Array} model rules
 */
Validator.prototype.createModel = function(name, model) {
	name = name || 'default';
	model = model || [];

	// model(name, rule, params[opt], tip[opt])
	this.models[name] = model;
};


/**
 * validate data
 * 
 * @param {String} model name
 * @param {Object} data
 * @param {String} condition [exist, notNull, must]
 * @callback {String, String} {err, tip}
 */
Validator.prototype.validate = function(modelName, vData, condition, callback) {
	if (typeof condition === 'function') {
		callback = condition;
		condition = undefined;
	}
	condition = condition || 'exist';
	callback = callback || function() {};

	var model = this.models[modelName];
	var error = {};
	var data = {};
	var tot = 0;
	var cnt = 0;

	// copy data
	if (condition === 'exist') {
		for (var i in vData) {
			data[i] = vData[i];
		}
	}
	else
	if (condition === 'notNull') {
		for (var i in vData) {
			if (vData[i] === '') continue;
			if (vData[i] === null) continue;
			if (vData[i] === undefined) continue;
			data[i] = vData[i];
		}
	}
	else
	if (condition === 'must') {
		for (var i = 0; i < model.length; i++) {
			data[model[i][0]] = (vData[model[i][0]] === undefined) ? '' : vData[model[i][0]];
		}
	}

	// calculate total callback functions
	for (var i = 0; i < model.length; i++) {
		if (data[model[i][0]] === undefined) continue;
		if (this.rules[model[i][1]] === undefined) continue;
		tot++;
	}

	// done function
	var done = function(err, name) {
		if (err !== null && error[name] === undefined) {
			error[name] = err;
		}

		cnt++;
		if (cnt === tot) {
			callback(func.empty(error) ? null : error);
		}
	}

	// handle all callback functions
	for (var i = 0; i < model.length; i++) {
		if (data[model[i][0]] === undefined) continue;
		if (this.rules[model[i][1]] === undefined) continue;

		this.rules[model[i][1]](data[model[i][0]], model[i][2], model[i][0], this.opt.lang, model[i][3], done);
	}

	// tot = 0
	if (tot === 0) {
		callback(null);
	}
};





