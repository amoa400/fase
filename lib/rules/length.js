"use strict";

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
 * @param {Object} param [min, max]
 * @param {String} data
 * @param {Object} option {name, lang, tip}
 * @callback {String, String} {err, name}
 */
module.exports = {
	name: 'length',
	func: function(data, param, name, lang, tip, callback) {
		var err = null;

		var min = param[0];
		var max = param[1];

		// only min
		if (max === -1) {
			if (data.length < min) {
				err = errTip[lang]['greater'].replace('[param]', min);
			}
		}
		// only max
		else
		if (min === -1) {
			if (data.length > max) {
				err = errTip[lang]['less'].replace('[param]', max);
			}
		}
		// both
		else {
			if (data.length < min || data.length > max) {
				err = errTip[lang]['range'].replace('[param1]', min).replace('[param2]', max);
			}
		}

		if (err !== null && tip !== undefined) {
			err = tip;
		}

		callback(err, name);
	}
};




