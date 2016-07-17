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
		this.info('Scaffolding this directory with ' + template)
	}

}

export default Init
