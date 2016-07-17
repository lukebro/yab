import chalk from 'chalk'

const tag = chalk.blue.italic('yab: ')
const tagHolder = Array(6).join(' ')

const Log = {

	/**
	 * A normal message
	 * 
	 * @param  {String} message Message to print to console
	 */
	msg(message) {
		console.log(tag + chalk.green(message))
	},

	/**
	 * List a set of items
	 * 
	 * @param  {Array}  items Items to print to console
	 */
	list(items = []) {
		items.forEach(function (item) {
			console.log(tagHolder + chalk.red(item))
		})
	},

	/**
	 * A warning message
	 * 
	 * @param  {String} message Warning to print to console
	 */
	warn(message) {
		console.log(tag + chalk.yellow(message))
	},

	/**
	 * A error message
	 * 
	 * @param  {String} message Error to print to console
	 */
	error(message) {
		console.log(tag + chalk.red(message))
	}
}

export default Log
