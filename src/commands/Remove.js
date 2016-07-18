import Command from '../yab/Command'

class Remove extends Command {

	/**
	 * Configure the command
	 */
	configure() {
		this.setName('remove')
			.setArgument('name')
			.setDescription('remove a template')
	}

	/**
	 * Execute the command
	 */
	execute(name) {
		this.info('The template ' + this.highlight(name) + ' has been removed.')
	}

}

export default Remove
