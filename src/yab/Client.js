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
	 *
	 * @param {Object} config Configuration object
	 */
	constructor(config) {
		this.config = config
		this.command = {}
		this.commandInfo = new Set()
		this.template = path.resolve(process.env.HOME + '/.yab')
		this.current = process.cwd()
		this.log = new Log()

		this.loadCommands()
		this.initCli()
	}

	/**
	 * Initialize the receiver sequence
	 */
	run() {
		if (! fs.existsSync(this.template)) {
			fs.mkdirSync(this.template);
		}

		this.execute()
	}

	/**
	 * Load the command from config
	 */
	loadCommands() {
		const commands = this.config.commands

		for (let command in commands) {
			this.command[command] = new commands[command](this.log)
			this.commandInfo.add(this.getCommandInfo(this.command[command]))
		}
		
	}

	/**
	 * Parse the command and create a new instance
	 * @param  {Object} command 
	 * @return {Object}
	 */
	getCommandInfo(command) {
		return { 
			name: command.name,
			description: command.description,
		}
	}

	/**
	 * Execute the command
	 */
	execute() {
		const name = this.isCommand(this.input) ? this.input : 'init'
		const command = this.command[name]
		
		command
			.setArgs(this.cli.input)
			.setFlags(this.cli.flags)
			.setConfig(this.config)
			.setCurrent(this.current)
			.setTemplate(this.template)
			.execute(this.input)
	}

	/**
	 * Initialize CLI
	 */
	initCli() {
		this.cli = meow({
			description: this.buildDescription(),
			help: this.buildHelp()
		})

		this.input = this.cli.input[0] == null ? 'list' : this.cli.input[0]
	}

	/**
	 * Check if current input is a command
	 *
	 * @param {String} command
	 * @return {Boolean}
	 */
	isCommand(command) {
		return (command in this.config.commands)
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
		this.commandInfo.forEach(command => {
			output.push(Array(6).join(' ')
				+ chalk.bold.red('yab ' + command.name)
				+ Array(longest - command.name.length  + 1).join(' ')
				+ chalk.white(' - ' + command.description))
		})
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

		this.commandInfo.forEach(command => {
			if (command.name.length > length) {
				length = command.name.length
			}
		})

		return length
	}
}

export default Client
