import Command from '../yab/Command'

class Init extends Command {

	execute() {
		console.log(this.flags)
		this.log.warn('omg noO!')
	}

}

export default Init
