'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _archiver = require('archiver');

var _archiver2 = _interopRequireDefault(_archiver);

var _decompressZip = require('decompress-zip');

var _decompressZip2 = _interopRequireDefault(_decompressZip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Archive = function () {
	function Archive() {
		_classCallCheck(this, Archive);
	}

	_createClass(Archive, null, [{
		key: 'zip',


		/**
   * Zip a directory
   * 
   * @param  {String} name     Name of file
   * @param  {String} fromPath Path from which the zip should be created
   * @param  {String} toPath   Path where the zipped file should go
   * @param  {Object} options  Options for zipping file
   */
		value: function zip(name, fromPath, toPath) {
			var ignore = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];

			var archive = (0, _archiver2.default)('zip');

			archive.pipe(_fs2.default.createWriteStream(toPath + '/' + name));
			archive.bulk([{
				cwd: fromPath,
				src: ['**/*'],
				expand: true,
				dot: true,
				ignore: ignore
			}]).finalize();
		}

		/**
   * Unzip a directory
   * 
   * @param  {String} fromPath Path of zip file
   * @param  {String} toPath   Path where to unzip file
   */

	}, {
		key: 'unzip',
		value: function unzip(fromPath, toPath) {

			if (!_fs2.default.existsSync(fromPath)) {
				throw Error('File does not exist');
			}

			var unzipper = new _decompressZip2.default(fromPath);

			unzipper.extract({
				path: toPath
			});
		}
	}]);

	return Archive;
}();

exports.default = Archive;