import Command from '../yab/Command'
import * as fs from 'fs'

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
		const templates = fs.readdirSync(this.template)

		if (! templates.length) {
			this.warn('No templates exist!')
			this.info('Create a new template with ' + this.highlight('yab this <name>') + ' while in the directory.')

			return
		}

		this.info('These are the current tempates saved:')
		this.list(templates.map(function (template) {
			return template.split('.')[0]
		}))
	}

}

export default List
