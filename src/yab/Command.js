import style from '../util/style'

class Command {

	/**
	 * Create a new instance of a command
	 * @param  {Client} cli
	 */
	constructor(client) {
		this.client = client
		this.logs = []
		this.flags = client.cli.flags
		this.input = client.cli.input
		this.config = client.cli.config
		const that = this
		this.log = {
			msg(log) {
				that.logs.push(style.msg(log))
			},

			list(log) {
				that.logs.push(style.list(log))
			},

			warn(log) {
				that.logs.push(style.warn(log))
			},

			error(log) {
				that.logs.push(style.error(log))
			}
		}
	}

	/**
	 * Command to be executed
	 * @return {Array} The output of the command
	 */
	execute() {}

	/**
	 * Run the command inside the client
	 * 
	 * @param  {Client} cli
	 * @return {Array}
	 */
	run() {
		this.execute()

		return this.logs
	}
}

export default Command
