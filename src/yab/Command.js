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

	setArgs(args) {
		this.args = args
	}

	setFlags(flags) {
		this.flags = flags
	}

	setConfig(config) {
		this.config = config
	}

	info(message) {
		this.log.info(message)
	}

	list(message) {
		this.log.list(message)
	}

	warn(message) {
		this.log.warn(message)
	}

	error(message) {
		this.log.error(message)
	}

}

export default Command
