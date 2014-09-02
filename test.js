"use strict";

var fase = require('./lib/index.js')({
	lang: 'cn'
});


// validator
var validator = fase.validator;

validator.createModel('user', [
	['name', 'length', [4, 20]],
	['name', 'char', ['eng', 'chn', 'num', '_']],
	['name', 'range', [111, 444]],
	['email', 'email'],
	['phone', 'phone'],
	['phone', 'type', 'string']
]);


var data = {
	name: 123,
	email: 'amoa400@163.com',
	phone: 123
};

validator.validate('user', data, 'exist', function(err) {
	console.log(err);
});





