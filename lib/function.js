"use strict";

// require


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

