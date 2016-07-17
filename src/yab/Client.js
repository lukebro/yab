import fs from 'fs'
import meow from 'meow'
import path from 'path'
import config from '../config'
import help from '../text/help'
import description from '../text/description'

class Client {

	/**
	 * Create a new instance of a receiver
	 */
	constructor() {
		this.config = config
		this.template = path.resolve(process.env.HOME + '/.yab')
		this.current = process.cwd()
		this.cli = meow({
			description: description,
			help: help
		}, {
			alias: this.config.options
		})
		this.input = this.cli.input[0] == null ? 'help' : this.cli.input[0]
	}

	/**
	 * Initialize the receiver sequence
	 */
	init() {
		this.before()
		this.execute()
		this.after()
	}

	/**
	 * Check if current input is a command
	 * @return {Boolean}
	 */
	isCommand(command) {
		return ! (command in this.config.commands) ? false : true
	}

	/**
	 * Do this before every command call
	 */
	before() {
		if (! fs.existsSync(this.template)) {
			fs.mkdirSync(this.template);
		}
	}

	/**
	 * Do this after every command call
	 */
	after() {}

	/**
	 * Execute the command
	 */
	execute() {
		const command = this.isCommand(this.input) ? (new this.config.commands[this.input](this)) : (new this.config.commands.init(this))

		const logs = command.run()

		this.console(...logs)
	}

	/**
	 * Print logs to console
	 * 
	 */
	console(...logs) {
		logs.forEach(function (log) {
			console.log(log)
		})
	}
}

export default Client
