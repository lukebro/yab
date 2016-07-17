import Command from '../yab/Command'

class List extends Command {

	/**
	 * Configure the command
	 */
	configure() {
		this.setName('list')
			.setDescription('list all available templates')

		return this
	}

	/**
	 * Execute the command
	 */
	execute() {
		this.info('Listing all the templates.')
	}

}

export default List
