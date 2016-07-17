'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tag = _chalk2.default.blue.italic('yab: ');
var tagHolder = Array(6).join(' ');

var Log = {

	/**
  * A normal message
  * 
  * @param  {String} message Message to print to console
  */

	msg: function msg(message) {
		console.log(tag + _chalk2.default.green(message));
	},


	/**
  * List a set of items
  * 
  * @param  {Array}  items Items to print to console
  */
	list: function list() {
		var items = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

		items.forEach(function (item) {
			console.log(tagHolder + _chalk2.default.red(item));
		});
	},


	/**
  * A warning message
  * 
  * @param  {String} message Warning to print to console
  */
	warn: function warn(message) {
		console.log(tag + _chalk2.default.yellow(message));
	},


	/**
  * A error message
  * 
  * @param  {String} message Error to print to console
  */
	error: function error(message) {
		console.log(tag + _chalk2.default.red(message));
	}
};

exports.default = Log;