import Command from '../yab/Command'
import fs from 'fs'

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
		const path = this.template + '/' + name + '.zip'

		const result = fs.existsSync(path);

		if (! result) {
			this.error('The template ' + this.highlight(name) + ' can\'t be removed because it doesn\'t exist.')
			return
		}

		fs.unlinkSync(path)

		this.info('The template ' + this.highlight(name) + ' has been removed.')
	}

}

export default Remove
