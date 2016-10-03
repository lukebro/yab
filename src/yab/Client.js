import fs from 'fs'
import meow from 'meow'
import path from 'path'
import chalk from 'chalk'
import Log from '../util/Log'

class Client {

	/**
	 * Create a new instance of a receiver
	 * 
	 *
	 * test
	 * @param {Object} config Configuration object
	 */
	constructor(config) {
		this.config = config
		this.command = {}
		this.commandInfo = []
		this.commandList = []
		this.template = path.resolve(process.env.HOME + '/.yab')
		this.cwd = process.cwd()
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
		for (let command in this.config.commands) {
			this.command[command] = new this.config.commands[command](this.log)
			this.commandInfo.push(this.getCommandInfo(this.command[command]))
			this.commandList.push(this.command[command].name)
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
			args: command.args,
			description: command.description,
			fullName: command.getFullName(),
		}
	}

	/**
	 * Execute the command
	 */
	execute() {
		const name = this.isCommand(this.input) ? this.input : 'default'
		const command = this.command[name]
		
		command
			.setInput(this.cli.input)
			.setFlags(this.cli.flags)
			.setConfig(this.config)
			.setCurrent(this.cwd)
			.setTemplate(this.template)

		command.execute(...this.determineArgs(command, this.cli.input))
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

	determineArgs(command, input) {
		const offset = command.default ? 0 : 1

		return input.splice(offset, command.args.length)
	}

	/**
	 * Check if current input is a command
	 *
	 * @param {String} command
	 * @return {Boolean}
	 */
	isCommand(command) {
		return this.commandList.includes(command)
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
				+ chalk.bold.red('yab ' + command.fullName)
				+ Array(longest - command.fullName.length  + 1).join(' ')
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
			if (command.fullName.length > length) {
				length = command.fullName.length
			}
		})

		return length
	}
}

export default Client
