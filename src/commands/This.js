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

		const result = Archive.zip(name + '.zip', this.cwd, this.template, this.config.ignore)

		if (! result) {
			this.error('The template ' + name + ' already exists.')
			this.info('Try ' + this.highlight('yab remove hello && yab this hello') + ' to override the current template.')
			return
		}

		this.info('Creating template ' + this.highlight(name) + ' from current directory.')
	}

}

export default This
