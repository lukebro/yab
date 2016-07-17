import fs from 'fs'
import meow from 'meow'
import path from 'path'
import chalk from 'chalk'
import Log from '../util/Log'
import help from '../text/help'
import description from '../text/description'

class Client {

	/**
	 * Create a new instance of a receiver
	 */
	constructor(config) {
		this.config = config
		this.commands = {}
		this.template = path.resolve(process.env.HOME + '/.yab')
		this.current = process.cwd()
		this.log = new Log

		this.loadCommands()
		this.initCli()
	}

	/**
	 * Initialize the receiver sequence
	 */
	init() {
		if (! fs.existsSync(this.template)) {
			fs.mkdirSync(this.template);
		}

		this.execute()
	}

	/**
	 * Check if current input is a command
	 * @return {Boolean}
	 */
	isCommand(command) {
		return ! (command in this.config.commands) ? false : true
	}

	/**
	 * Load the command from config
	 */
	loadCommands() {
		for (let command in this.config.commands) {
			this.commands[command] = this.parseCommand(this.config.commands[command])
		}
		
	}

	/**
	 * Parse the command and create a new instance
	 * @param  {Object} command 
	 * @return {Object}
	 */
	parseCommand(command) {
		const cmd = new command(this.log)
		return { 
			name: cmd.name,
			description: cmd.description,
			_: cmd
		}
	}

	/**
	 * Execute the command
	 */
	execute() {
		const name = this.isCommand(this.input) ? this.input : 'init'
		const command = this.commands[name]._
		
		command.setArgs(this.cli.inputs)
		command.setFlags(this.cli.flags)
		command.setConfig(this.config)
		command.execute(this.input)
	}

	/**
	 * Initialize the CLI
	 */
	initCli() {
		this.cli = meow({
			description: this.buildDescription(),
			help: this.buildHelp()
		})

		this.input = this.cli.input[0] == null ? 'list' : this.cli.input[0]
	}

	/**
	 * Build the help text
	 * 
	 * @return {String}
	 */
	buildHelp() {
		const output = []
		const longest = this.longestCommand()

		output.push(chalk.blue.italic.bold('commands'))
		for (let command in this.commands) {
			output.push(Array(6).join(' ')
				+ chalk.bold.red('yab ' + this.commands[command].name)
				+ Array(longest - this.commands[command].name.length  + 1).join(' ')
				+ chalk.white(' - ' + this.commands[command].description))
		}
		output.push('')
		output.push(chalk.blue.italic.bold('for more help visit'))
		output.push(Array(6).join(' ') + chalk.bold.red('https://github.com/lukebro/yab#readme'))
		output.push('\t')
		return output.join('\n')
	}

	/**
	 * Build the description for the CLI
	 *
	 * @return {String}
	 */
	buildDescription() {
		return chalk.red.bold.italic('yab: ') + ' ' + chalk.white.bold.italic('yet another bootstrapper')
	}

	/**
	 * Get the length of the longest command
	 * 
	 * @return {Number}
	 */
	longestCommand() {
		let length = 0

		for (let command in this.commands) {
			if (this.commands[command].name.length > length) {
				length = this.commands[command].name.length 
			}
		}

		return length
	}
}

export default Client
