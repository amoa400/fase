"use strict";

/** 
 * phone validator
 *
 * @param {Array} param
 * @param {String} data
 * @param {String} field name
 * @param {String} language
 * @param {String} tip
 * @callback {String, String} {err, name}
 */
module.exports = {
	name: 'phone',
	func: function(data, param, name, lang, tip, callback) {
		var err = (lang === 'en') ? 'format is not correct' : '格式不正确';

		if (tip !== undefined) {
			err = tip;
		}

		// only chinese phone format
		var reg = new RegExp('^1[0-9]{10}$');
		if (!reg.test(data)) {
			callback(err, name);
		} else {
			callback(null, name);
		}
	}
};
