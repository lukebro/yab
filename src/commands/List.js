import Command from '../yab/Command'

class List extends Command {

	configure() {
		this.setName('list')
			.setDescription('list all possible values')

		return this
	}

	execute() {
		this.warn('oh no!')
	}

}

export default List
