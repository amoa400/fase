"use strict";

/** 
 * email validator
 *
 * @param {Array} param
 * @param {String} data
 * @param {String} field name
 * @param {String} language
 * @param {String} tip
 * @callback {String, String} {err, name}
 */
module.exports = {
	name: 'email',
	func: function(data, param, name, lang, tip, callback) {
		var err = (lang === 'en') ? 'format is not correct' : '格式不正确';

		if (tip !== undefined) {
			err = tip;
		}

		var reg = new RegExp('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$');
		if (!reg.test(data)) {
			callback(err, name);
		} else {
			callback(null, name);
		}
	}
};




