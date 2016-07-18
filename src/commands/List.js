import Command from '../yab/Command'

class List extends Command {

	/**
	 * Configure the command
	 */
	configure() {
		this.setName('list')
			.setDescription('list all available templates')
	}

	/**
	 * Execute the command
	 */
	execute() {
		this.info('These are the current templates saved:')
	}

}

export default List
