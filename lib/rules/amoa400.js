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
 * @param {String} field name
 * @param {String} language
 * @param {String} tip
 * @callback {String, String} {err, name}
 */
module.exports = {
	name: 'amoa400',
	func: function(data, param, name, lang, tip, callback) {
		if (data === 'amoa400') callback(null, name);
		else callback('not amoa400', name);
	}
};




