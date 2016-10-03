'use strict';

var _Client = require('./yab/Client');

var _Client2 = _interopRequireDefault(_Client);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cli = new _Client2.default(_config2.default);

cli.run();