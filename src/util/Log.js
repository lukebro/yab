import chalk from 'chalk'

class Log {

	/**
	 * Create a new instance of Log
	 */
	constructor() {
		this.tag = chalk.red.bold.italic('yab: ')
		this.tagHolder = Array(6).join(' ')
	}

	/**
	 * Setter for tag
	 * 
	 * @param  {String} tag [description]
	 */
	set tag(tag) {
		this._tag = tag
	}

	/**
	 * Getter for tag
	 * After first use of tag change with placeholder
	 * 
	 * @return {String}
	 */
	get tag() {
		const tag = this._tag
		this.tag = this.tagHolder

		return tag
	}

	/**
	 * A normal message
	 * 
	 * @param  {String} message Message to print to console
	 */
	info(message) {
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

	/**
	 * Highlight a phrase
	 * 
	 * @param  {String} phrase
	 * @return {String}
	 */
	highlight(phrase) {
		return chalk.yellow.italic(phrase)
	}
}

export default Log
