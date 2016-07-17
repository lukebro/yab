import chalk from 'chalk'

/**
 * @todo this.tag does not work............ no idea figure it out
 */
class Log {

	constructor() {
		this.tag = chalk.red.bold.italic('yab: ')
		this.tagHolder = Array(6).join(' ')
	}

	/**
	 * A normal message
	 * 
	 * @param  {String} message Message to print to console
	 */
	info(message) {
		console.log(this)
		console.log(this.tag + chalk.white(message))
	}

	/**
	 * List a set of items
	 * 
	 * @param  {Array}  items Items to print to console
	 */
	list(...messages) {
		messages.forEach(function (message) {
			console.log(this.tagHolder + chalk.yellow.italic(message))
		})
	}

	/**
	 * A warning message
	 * 
	 * @param  {String} message Warning to print to console
	 */
	warn(message) {
		console.log(this.tag + chalk.yellow(message))
	}

	/**
	 * A error message
	 * 
	 * @param  {String} message Error to print to console
	 */
	error(message) {
		console.log(this.tag + chalk.red(message))
	}
}

export default Log
