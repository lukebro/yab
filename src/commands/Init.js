import Command from '../yab/Command'

class Init extends Command {

	/**
	 * Configure the command
	 */
	configure() {
		this.setName('<name>')
			.setDescription('scaffold current directory with a template')
	}

	/**
	 * Execute the command
	 */
	execute(template) {
		this.info('Scaffolding the current directory with ' + this.highlight(template) + '.')
	}

}

export default Init
