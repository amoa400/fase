"use strict";

// error tip
var errTip = {};

// english error tip
errTip.en = 'not amoa400';

// chinese error tip
errTip.cn = '非amoa400';

/** 
 * length validator
 *
 * @param {Object} param [min, max]
 * @param {String} data
 * @return {Object} {err, tip}
 */
module.exports = {
	name: 'amoa400',
	func: function(data, param, lang, callback) {
		var ret = {};
		ret.err = null;

		if (data === 'amoa400') callback(null);
		else callback('not amoa400', errTip[lang]);
	},
	rtType: 'callback'
};




