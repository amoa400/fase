"use strict";

/** 
 * reg validator
 *
 * @param {Array} param
 * @param {String} data
 * @param {String} field name
 * @param {String} language
 * @param {String} tip
 * @callback {String, String} {err, name}
 */
module.exports = {
	name: 'regexp',
	func: function(data, param, name, lang, tip, callback) {
		var err = (lang === 'en') ? 'format is not correct' : '格式不正确';

		if (tip !== undefined) {
			err = tip;
		}

		var reg = new RegExp(param);
		if (!reg.test(data)) {
			callback(err, name);
		} else {
			callback(null, name);
		}
	}
};
