"use strict";

var fs = require('fs');

/**
 * Definition
 * define something
 *
 */
var Definition = function() {
	this.data = {};
};
module.exports = Definition;

/**
 * set a definition
 *
 * @param {String} name
 * @param {Boolean} compress
 * @param {Function} definition
 */
Definition.prototype.set = function(name, compress, func) {
	if (typeof compress !== 'boolean') {
		func = compress;
		compress = true;
	}

	var data = '';
	if (typeof func === 'string') {
		data = func;
	}
	else
	if (typeof func === 'function') {
		data = func.toString();
		data = data.replace(/function( )*\(( )*\)( )*\{/, '');
		data = data.replace(/\}( )*$/, '');
		data = data.replace(/\/\/(.)*\n/g, '');
	}
	else {
		data = '';
	}

	if (compress) {
		data = data.replace(/\n/g, '');
		data = data.trim();
	}
	
	this.data[name] = data;
};

/**
 * generate a file
 *
 * @param {String} src
 * @param {String} dest
 */
Definition.prototype.generate = function(src, dest) {
	var self = this;

	fs.readFile(src, function(err, data) {
		if (err) return;

		var reg = new RegExp(/__DEFB '((.)*?)' DEFE__/);
		data = data.toString();
		while (data.search(reg) !== -1) {
			var name = data.match(reg)[1];
			data = data.replace(reg, self.data[name]);
		}

		fs.writeFile(dest, data);
	});
};




