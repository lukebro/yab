class Command {

	/**
	 * Create a new instance of a command
	 * 
	 * @param  {Log} output
	 */
	constructor(output) {
		this.log = output
		this.name = 'Command'
		this.description = 'Command description'

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

	setName(name) {
		this.name = name

		return this
	}

	setDescription(description) {
		this.description = description

		return this
	}

	setCurrent(current) {
		this.current = current

		return this
	}

	setTemplate(template) {
		this.template = template

		return this
	}

	setArgs(args) {
		this.args = args

		return this
	}

	setFlags(flags) {
		this.flags = flags

		return this
	}

	setConfig(config) {
		this.config = config

		return this
	}

	info(message) {
		this.log.info(message)

		return this
	}

	list(message) {
		this.log.list(message)

		return this
	}

	warn(message) {
		this.log.warn(message)

		return this
	}

	error(message) {
		this.log.error(message)

		return this
	}

	highlight(phrase) {
		return this.log.highlight(phrase)
	}

}

export default Command
