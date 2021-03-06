import fs from 'fs'
import archiver from 'archiver'
import decompress from 'decompress-zip'

const Archive = {

	/**
	 * Zip a directory
	 * 
	 * @param  {String} name     Name of file
	 * @param  {String} fromPath Path from which the zip should be created
	 * @param  {String} toPath   Path where the zipped file should go
	 * @param  {Object} options  Options for zipping file
	 */
	zip(name, fromPath, toPath, ignore = []) {
		const fullPath = toPath + '/' + name

		if (fs.existsSync(fullPath)) {
			return false
		}

		const archive = archiver('zip')

		archive.pipe(fs.createWriteStream(fullPath))
		archive.bulk([{
			cwd: fromPath,
			src: ['**/*'],
			expand: true,
			dot: true,
			ignore: ignore,
		}]).finalize()

		return true
	},

	/**
	 * Unzip a directory
	 * 
	 * @param  {String} fromPath Path of zip file
	 * @param  {String} toPath   Path where to unzip file
	 */
	unzip(fromPath, toPath) {
		if (! fs.existsSync(fromPath)) {
			return false
		}

		const unzipper = new decompress(fromPath)

		unzipper.extract({
			path: toPath
		})

		return true
	}
}

export default Archive
