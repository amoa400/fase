"use strict";

/** 
 * ip validator
 *
 * @param {Array} param
 * @param {String} data
 * @param {String} field name
 * @param {String} language
 * @param {String} tip
 * @callback {String, String} {err, name}
 */
module.exports = {
	name: 'ip',
	func: function(data, param, name, lang, tip, callback) {
		var err = (lang === 'en') ? 'format is not correct' : '格式不正确';

		if (tip !== undefined) {
			err = tip;
		}

		// check format
		var reg = new RegExp('^((25[0-5]|2[0-4]\\d|[01]?\\d\\d?)($|(?!\\.$)\\.)){4}$');
		if (!reg.test(data)) {
			callback(err, name);
		} else {
			callback(null, name);
		}
	}
};
