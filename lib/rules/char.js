"use strict";

/** 
 * char validator
 *
 * @param {Array} param [char]
 * @param {String} data
 * @param {String} field name
 * @param {String} language
 * @param {String} tip
 * @callback {String, String} {err, name}
 */
module.exports = {
	name: 'char',
	func: function(data, param, name, lang, tip, callback) {
		var err = '';
		var flag = false;

		// generate reg string
		var regStr = '^(';
		for (var i = 0; i < param.length; i++) {
			if (flag) {
				regStr += '|';
				err += (lang === 'en') ? ', ' : '、';;
			}
			else {
				flag = true;
			}

			switch (param[i]) {
				case 'num':
					regStr += '[0-9]';
					err += (lang === 'en') ? 'number' : '数字';
					break;
				case 'eng':
					regStr += '[a-zA-Z]';
					err += (lang === 'en') ? 'letter' : '字母';
					break;
				case 'chn':
					regStr += '[\\u4e00-\\u9fa5]';
					err += (lang === 'en') ? 'chinese letter' : '汉字';
					break;
				default:
					regStr += '[' + param[i] + ']';
					err += param[i];
					break;
			}
		}
		regStr += ')*$';

		err = (lang === 'en') ? 'can only contain ' + err : '只能包含' + err;
		if (tip !== undefined) {
			err = tip;
		}

		// check
		var reg = new RegExp(regStr);
		if (!reg.test(data)) {
			callback(err, name);
		}
		else {
			callback(null, name);
		}
	}
};




