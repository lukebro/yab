import Command from '../yab/Command'

class Init extends Command {

	/**
	 * Configure the command
	 */
	configure() {
		this.setName('')
			.setArgument('name')
			.setDescription('scaffold current directory with a template')
	}

	/**
	 * Execute the command
	 */
	execute(name) {
		this.info('Scaffolding the current directory with ' + this.highlight(name) + '.')
	}

}

export default Init
