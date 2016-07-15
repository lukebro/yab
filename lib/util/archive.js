const fs = require('fs')
const archiver = require('archiver')
const decompress = require('decompress-zip')

class Archive {

	/**
	 * Zip a directory
	 * 
	 * @param  {String} name     Name of file
	 * @param  {String} fromPath Path from which the zip should be created
	 * @param  {String} toPath   Path where the zipped file should go
	 * @param  {Object} options  Options for zipping file
	 */
	static zip(name, fromPath, toPath, ignore = []) {
		const archive = archiver('zip')

		archive.pipe(fs.createWriteStream(toPath + '/' + name))
		archive.bulk([{
			cwd: fromPath,
			src: ['**/*'],
			expand: true,
			dot: true,
			ignore: ignore,
		}]).finalize()
	}

	/**
	 * Unzip a directory
	 * 
	 * @param  {String} fromPath Path of zip file
	 * @param  {String} toPath   Path where to unzip file
	 */
	static unzip(fromPath, toPath) {

		if (! fs.existsSync(fromPath)) {
			throw Error('File does not exist')
		}

		const unzipper = new decompress(fromPath)

		unzipper.extract({
			path: toPath
		})
	}
}

module.exports = Archive
