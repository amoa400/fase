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
	name: 'type',
	func: function(data, param, name, lang, tip, callback) {
		var err = (lang === 'en') ? 'type is not correct' : '类型不正确';

		if (tip !== undefined) {
			err = tip;
		}

		if (typeof data !== param) {
			callback(err, name);
		}
		else {
			callback(null, name);
		}
	}
};




