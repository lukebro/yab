import Command from '../yab/Command'

class This extends Command {

	/**
	 * Configure the command
	 */
	configure() {
		this.setName('this <name>')
			.setDescription('create a new template from the current directory')

		return this
	}

	/**
	 * Execute the command
	 */
	execute(template) {
		this.info('Creating a template of current directory with name ' + template)
	}

}

export default This
