import Command from '../yab/Command'

class Init extends Command {

	configure() {
		this.setName('init')
			.setDescription('this is a test command')
	}

	execute() {
		this.info('hello')
		this.info('welcome!')
	}

}

export default Init
