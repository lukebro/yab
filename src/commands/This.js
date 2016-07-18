import Command from '../yab/Command'

class This extends Command {

	/**
	 * Configure the command
	 */
	configure() {
		this.setName('this <name>')
			.setDescription('create a new template from the current directory')
	}

	/**
	 * Execute the command
	 */
	execute() {
		this.info('Creating template ' + this.highlight(this.args[1]) + ' from current directory.')
	}

}

export default This
