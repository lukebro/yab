import Command from '../yab/Command'
import Archive from '../util/archive'

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
		try {
			Archive.zip(name + '.zip', this.current, this.template, this.config.ignore)
		} catch(error) {
			this.error('The template ' + name + ' does not exists.')
		}

		this.info('Creating template ' + this.highlight(name) + ' from current directory.')
	}

}

export default This
