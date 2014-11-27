"use strict";

// error tip
var errTip = {};

// english error tip
errTip.en = {
	greater: 'should not be less than [param]',
	less: 'should not be greater than [param]',
	range: 'should be between in [param1] and [param2]'
};

// chinese error tip
errTip.cn = {
	greater: '应不小于[param]',
	less: '应不大于[param]',
	range: '应在[param1]-[param2]范围中'
};

/** 
 * range validator
 *
 * @param {Object} param [min, max]
 * @param {String} data
 * @param {String} field name
 * @param {String} language
 * @param {String} tip
 * @callback {String, String} {err, name}
 */
module.exports = {
	name: 'range',
	func: function(data, param, name, lang, tip, callback) {
		var err = null;

		var min = param[0];
		var max = param[1];

		// only min
		if (max === -1) {
			if (data < min) {
				err = errTip[lang]['greater'].replace('[param]', min);
			}
		}
		// only max
		else
		if (min === -1) {
			if (data > max) {
				err = errTip[lang]['less'].replace('[param]', max);
			}
		}
		// both
		else {
			if (data < min || data > max) {
				err = errTip[lang]['range'].replace('[param1]', min).replace('[param2]', max);
			}
		}

		if (err !== null && tip !== undefined) {
			err = tip;
		}

		callback(err, name);
	}
};
