import chalk from 'chalk'

const tag = chalk.blue.italic('yab: ')
const tagHolder = Array(6).join(' ')

const style = {

	/**
	 * A normal message
	 * 
	 * @param  {String} message Message to print to console
	 * @return {String}
	 */
	msg(message) {
		return tag + chalk.green(message)
	},

	/**
	 * List a set of items
	 * 
	 * @param  {Array}  items Items to print to console
	 * @return {String}
	 */
	list(items = []) {
		const output = []
		items.forEach(function (item) {
			output.push(tagHolder + chalk.red(item))
		})

		return output.join('\n')
	},

	/**
	 * A warning message
	 * 
	 * @param  {String} message Warning to print to console
	 * @return {String}
	 */
	warn(message) {
		return tag + chalk.yellow(message)
	},

	/**
	 * A error message
	 * 
	 * @param  {String} message Error to print to console
	 * @return {String}
	 */
	error(message) {
		return tag + chalk.red(message)
	}
}

export default style
