'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _log = require('../util/log');

var _log2 = _interopRequireDefault(_log);

var _archive = require('../util/archive');

var _archive2 = _interopRequireDefault(_archive);

var _meow = require('meow');

var _meow2 = _interopRequireDefault(_meow);

var _description = require('../text/description');

var _description2 = _interopRequireDefault(_description);

var _help = require('../text/help');

var _help2 = _interopRequireDefault(_help);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cli = (0, _meow2.default)({
	description: _description2.default,
	help: _help2.default
});

var templateDir = process.env.HOME + '/.yab';
var currentDir = process.cwd();
var args = [process.argv[2], process.argv[3]];

var ignoredDirectories = ['**/node_modules/', '**/node_modules/**', '**/bower_components/', '**/bower_components/**', '**/.git/', '**/.git/**'];

var app = {
	init: function init() {
		_log2.default.msg('Initializing yab!');
	}
};

exports.default = app;