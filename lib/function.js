"use strict";

// require
var crypto = require('crypto');
var http = require('http');

/**
 * Function
 * common functions
 *
 * @param {Object} option
 */
var Func = function() {
};
var that = module.exports = new Func();

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
 * @return {String} hashed string
 */
Func.prototype.hash = function(raw, type) {
	type = type || 'md5';
	return crypto.createHash(type).update(raw).digest('hex');
}

/**
 * encrypt string
 *
 * @param {String} raw
 * @param {String} key
 * @return {String} encrypted string
 */
Func.prototype.encrypt = function(raw, key) {
	key = key || 'amoa400.fase.git.key';
	key = crypto.createHash('md5').update(key).digest();
	var cipher = crypto.createCipheriv('aes-128-cbc', key, 'amoa400.fase.git');
	var enc = cipher.update(raw, 'utf8', 'hex');
	enc += cipher.final('hex');
	return enc;
}

/**
 * decrypt string
 *
 * @param {String} encrypted string
 * @param {String} key
 * @return {String} raw
 */
Func.prototype.decrypt = function(enc, key) {
	key = key || 'amoa400.fase.git.key';
	key = crypto.createHash('md5').update(key).digest();
	var decipher = crypto.createDecipheriv('aes-128-cbc', key, 'amoa400.fase.git');
	var dec = decipher.update(enc, 'hex', 'utf8');
	dec += decipher.final('utf8');
	return dec;
}

/**
 * get fields from object
 *
 * @param {Object} data
 * @param {Array} filed array
 * @param {Boolean} retain all fields
 * @return {Object} data
 */
Func.prototype.getFields = function(data, fields, retain) {
	var ret = {};
	for (var i = 0; i < fields.length; i++) {
		if (retain) {
			ret[fields[i]] = '';
		}
		for (var j in data) {
			if (j === fields[i]) {
				ret[j] = data[j];
				break;
			}
		}
	}
	return ret;
}


/**
 * transform ip to int
 *
 * @param {String} ip
 * @return {Number} ip(int)
 */
Func.prototype.ip2int = function(ip) {
	var num = ip.toString().split('.');
	var ret = parseInt(num[0]) * 255 * 255 * 255;
	ret += parseInt(num[1]) * 255 * 255;
	ret += parseInt(num[2]) * 255;
	ret += parseInt(num[3]);
	return ret || 0;
}

/**
 * get web page content
 *
 * @param {String} url
 * @return {String} content
 */
Func.prototype.getPage = function(url, callback) {
	http.get(url, function(res) {
		var data = [];
		res.on('data', function(chunk) {
			data.push(chunk);
		});
		res.on('end', function() {
			var ret = Buffer.concat(data);
			callback(null, ret);
		});
		res.on('error', function() {
			callback(new Error('error'), null);
		});
  });
}







