import Command from '../yab/Command'
import Archive from '../util/archive'

class Init extends Command {

	/**
	 * Configure the command
	 */
	configure() {
		this.setName('')
			.setArgument('name')
			.setDescription('scaffold current directory with a template')
	}

	/**
	 * Execute the command
	 */
	execute(name) {
		const result = Archive.unzip(this.template + '/' + name + '.zip', this.current)

		if (! result) {
			this.info('No templates exists!')
			this.info('Create a new template with ' + this.highlight('yab this <name>') + ' while in the directory.')
			return
		}

		this.info('Scaffolding the current directory with ' + this.highlight(name) + '.')
	}

}

export default Init
