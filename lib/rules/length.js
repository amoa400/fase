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
 * @return {Object} {err, tip}
 */
module.exports = {
	name: 'length',
	func: function(data, param, lang) {
		var ret = {};
		ret.err = null;

		var min = param[0];
		var max = param[1];

		// only min
		if (max === -1) {
			if (data.length < min) {
				ret.err = 'greater';
				ret.tip = errTip[lang][ret.err].replace('[param]', min);
			}
		}
		// only max
		else
		if (min === -1) {
			if (data.length > max) {
				ret.err = 'less';
				ret.tip = errTip[lang][ret.err].replace('[param]', max);
			}
		}
		// both
		else {
			if (data.length < min || data.length > max) {
				ret.err = 'range';
				ret.tip = errTip[lang][ret.err].replace('[param1]', min).replace('[param2]', max);
			}
		}

		return ret;
	},
	rtType: 'return'
};




