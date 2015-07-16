'use strict';
var objType = require('obj-type');

module.exports = function (el, str) {
	if (objType(el).indexOf('element') < 0) {
		throw new TypeError('Expected an HTML DOM element as first argument');
	}

	if (typeof str !== 'string') {
		throw new TypeError('Expected a string as second argument');
	}

	if (el.classList) {
		return el.classList.contains(str);
	} else {
		return new RegExp('(^| )' + str + '( |$)', 'gi').test(el.className);
	}
};
