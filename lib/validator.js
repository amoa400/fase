"use strict";

// require
var rAmoa400= require('./rules/amoa400.js');
var rLength = require('./rules/length.js');

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
	this.createRule(rAmoa400.name, rAmoa400.func, rAmoa400.rtType);
	this.createRule(rLength.name, rLength.func, rLength.rtType);
};

/**
 * create a new rule
 *
 * @param {String} rule name
 * @param {Function} validate function
 * @param {String} return type (return/callback)
 */
Validator.prototype.createRule = function(name, func, rtType) {
	name = name || 'default';
	func = func || function() {};
	rtType = rtType || 'return';

	this.rules[name] = {
		func: func,
		rtType: rtType
	};
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

	this.models[name] = model;

	/*
		model example:
			name
			rule
			params (opt)
			condition (exist/notNull/must) (opt)
			tip (opt)
	*/
};


/**
 * validate data
 * 
 * @param {String} model name
 * @param {Object} data
 */
Validator.prototype.validate = function(modelName, data, condition, callback) {
	condition = condition || 'exist';
	var model = this.models[modelName];
	var rtType = 'return';
	var err = {};

	// get return type
	for (var i in data) {
		for (var j = 0; j < model.length; j++) {
			if (i !== model[j][0]) continue;
			if (!this.rules[model[j][1]]) continue;
			if (this.rules[model[j][1]].rtType !== 'callback') continue;

			rtType = 'callback';
			break;
		}

		if (rtType === 'callback') {
			break;
		}
	}

	// handle all return function
	for (var i in data) {
		for (var j = 0; j < model.length; j++) {
			if (i !== model[j][0]) continue;
			if (!this.rules[model[j][1]]) continue;
			if (this.rules[model[j][1]].rtType !== 'return') continue;
			if (err[i]) continue;

			var res = this.rules[model[j][1]].func(data[i], model[j][2], this.opt.lang);
			if (res.err) {
				err[i] = res.tip;
			}
		}
	}

	// handle all callback function
	if (rtType === 'callback') {
		// generate id
		var id = Math.random();
	}

	console.log(err);
	console.log(id);
	console.log(rtType);
};





