import Command from '../yab/Command'

class Remove extends Command {

	/**
	 * Configure the command
	 */
	configure() {
		this.setName('remove <name>')
			.setDescription('remove a template')

		return this
	}

	/**
	 * Execute the command
	 */
	execute(template) {
		this.info('Removing the template ' + template)
	}

}

export default Remove
