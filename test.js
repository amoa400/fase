"use strict";

var fase = require('./lib/index.js')();

// validator
var validator = fase.validator;

validator.createModel('user', [
	['name', 'length', [1, 3]],
	['pass', 'length', [6, -1]],
	['real', 'length', [-1, 9]],
	['vvvv', 'amoa400']
]);

console.log(
	validator.validate('user', {name: '1234567', vvvv: 1})
);







