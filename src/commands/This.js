import Command from '../yab/Command'

class This extends Command {

	/**
	 * Configure the command
	 */
	configure() {
		this.setName('this')
			.setArgument('name')
			.setDescription('create a new template from the current directory')
	}

	/**
	 * Execute the command
	 */
	execute(name) {
		this.info('Creating template ' + this.highlight(name) + ' from current directory.')
	}

}

export default This
