"use strict";

// require
var validator = require('../index.js');
console.log(validator);

// error tip
var errTip = {};

// english error tip
errTip.en = {
	greater: 'length should be greater than [param]',
	less: 'length should be less than [param]',
	range: 'length should be between in [param1] and [param2]'
};

// chinese error tip
errTip.cn = {
	greater: '长度应大于[param]位',
	less: '长度应小于[param]位',
	range: '长度应为[param1]-[param2]位'
};

/** 
 * length validator
 *
 * @param {Number} minimum length
 * @param {Number} maximum length
 * @param {String} data
 * @return {Object} {err, tip}
 */
module.exports = ('length', function(min, max, data) {
	var ret = {};
	ret.err = null;

	// only min
	if (max === undefined || max === -1) {
		if (data.length < min) {
			ret.err = 'greater';
			ret.tip = errTip[validator.lang][ret.err];
		}
	}
	// only max
	else
	if (min === undefined || min === -1) {
		if (data.length > max) {
			ret.err = 'min';
			ret.tip = errTip[validator.lang][ret.err];
		}
	}
	// both
	else {
		ret.err = 'both';
		ret.tip = errTip[validator.lang][ret.err];
	}

	return ret;
});



