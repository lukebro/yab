class Command {

	/**
	 * Create a new instance of a command
	 * 
	 * @param  {Log} output
	 */
	constructor(output) {
		this.log = output
		this.name = ''
		this.description = ''
		this.args = []
		this.configure()
	}

	/**
	 * Configure the command options
	 */
	configure() {
		throw new Error("Must override Command.configure")
	}

	/**
	 * Execute the command
	 */
	execute() {
		throw new Error("Must override Command.execute")
	}

	/**
	 * Set name of command
	 * 
	 * @param {String} name
	 * @return {this}
	 */
	setName(name) {
		this.name = name

		return this
	}

	/**
	 * Set description of command
	 * 
	 * @param {String} description
	 * @return {this}
	 */
	setDescription(description) {
		this.description = description

		return this
	}

	/**
	 * Set argument of command
	 * 
	 * @param {...String} args]
	 * @return {this}
	 */
	setArgument(...args) {
		args = args.map(arg => '<' + arg + '>')
		this.args = this.args.concat(args)

		return this
	}

	/**
	 * Get the fully qualified name of command
	 * 
	 * @return {String}
	 */
	getFullName() {
		if (this.args.length && this.name !== '') {
			return this.name + ' ' + this.args.join(' ')
		}

		if(this.args.length) {
			return this.args.join(' ')
		}

		return this.name
	}

	/**
	 * Determine if command is a default
	 * 
	 * @return {Boolean}
	 */
	get default() {
		return this.name === ''
	}

	/**
	 * Set current directory
	 * 
	 * @param {String} current
	 * @return {this}
	 */
	setCurrent(cwd) {
		this.cwd = cwd

		return this
	}

	/**
	 * Set template directory
	 * 
	 * @param {String} template
	 * @return {this}
	 */
	setTemplate(template) {
		this.template = template

		return this
	}

	/**
	 * Set command input
	 * 
	 * @param {Array} input
	 * @return {this}
	 */
	setInput(input) {
		this.input = input

		return this
	}

	/**
	 * Set command flags
	 * 
	 * @param {Object} flags
	 * @return {this}
	 */
	setFlags(flags) {
		this.flags = flags

		return this
	}

	/**
	 * Set CLI configuration 
	 * 
	 * @param {Object} config
	 * @return {this}
	 */
	setConfig(config) {
		this.config = config

		return this
	}

	/**
	 * Log in info style
	 * 
	 * @param  {String} message
	 * @return {this}
	 */
	info(message) {
		this.log.info(message)

		return this
	}

	/**
	 * Log in list style
	 * 
	 * @param  {String} message
	 * @return {this}
	 */
	list(message) {
		this.log.list(message)

		return this
	}

	/**
	 * Log in warn style
	 * 
	 * @param  {String} message
	 * @return {this}
	 */
	warn(message) {
		this.log.warn(message)

		return this
	}

	/**
	 * Log in error style
	 * 
	 * @param  {String} message
	 * @return {this}
	 */
	error(message) {
		this.log.error(message)

		return this
	}

	/**
	 * Highlight a phrase
	 * 
	 * @param  {String} phrase
	 * @return {String}
	 */
	highlight(phrase) {
		return this.log.highlight(phrase)
	}

}

export default Command
