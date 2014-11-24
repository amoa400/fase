"use strict";

// require
var crypto = require('crypto');

/**
 * Function
 * common functions
 *
 * @param {Object} option
 */
var Func = function() {
};
module.exports = Func;

/**
 * check Object is empty or not
 *
 * @param {Object} object
 * @return {Boolean} true/false
 */
Func.prototype.empty = function(obj) {
	if (typeof obj !== 'object') return false;


	if (obj.length === undefined) {
		for (var i in obj) {
			return false;
		}
		return true;
	} else {
		return obj.length === 0;
	}
}

/**
 * generate random string
 *
 * @param {Number} string length
 * @return {String} random string
 */
Func.prototype.randString = function(len) {
	len = len || 16;

	var dict = '01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var s = '';
	for (var i = 0; i < len; i++) {
		s += dict[parseInt(Math.random() * dict.length)];
	}

	return s;
}

/**
 * generate hash string
 *
 * @param {String} raw
 * @param {String} hash type (sha1, md5, sha256, sha512)
 * @param {String} salt
 * @return {String} hash string
 */
Func.prototype.hash = function(raw, type) {
	type = type || 'md5';
	return crypto.createHash(type).update(raw).digest('hex');
}





