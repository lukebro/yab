import Command from '../yab/Command'

class Remove extends Command {

	/**
	 * Configure the command
	 */
	configure() {
		this.setName('remove <name>')
			.setDescription('remove a template')
	}

	/**
	 * Execute the command
	 */
	execute() {
		this.info('The template ' + this.highlight('ok') + ' has been removed.')
	}

}

export default Remove
