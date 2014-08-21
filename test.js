"use strict";

var fase = require('./lib/index.js')({
	lang: 'cn'
});


// validator
/*
var validator = fase.validator;

validator.createModel('user', [
	['name', 'length', [1, 3]],
	['pass', 'length', [6, -1]],
	['real', 'length', [-1, 9]],
	['vvvv', 'amoa400']
]);


var data = {name: '1234567', vvvv: 'amoa400', ttt: ''};
validator.validate('user', data, 'notNull', function(err) {
	console.log(err);
});
*/




