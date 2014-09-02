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


/*
(function() {

  var err = {};
  var res = {};
  if (!resume) {
    resume = callback;
    callback = function() {};
  }

  // token校验
  var tkinfo = '';
  [err, tkinfo] = yield run(ctrl.user.verify, token, resume);
  if (err) {
    callback(err, null);
    return;
  }


	

	let a = 1;
	console.log(a);

})();


var ttt = function() {
	return 1;
}

var read = function*() {
	console.log(123);
	var t = 0;
	var a = 1;
	[t, a] = yield ttt();
	console.log(t);
	console.log(a);
	console.log(dafd);
}

var r = read();
r.next();
r.next(1, 2);
*/


fase.definition.set('init', false, function() {
	var a = 5;
	var b = 9;
});

fase.definition.set('token', function() {
	console.log(c);
	return c;
});

fase.definition.generate('test2.js', 'test3.js');






