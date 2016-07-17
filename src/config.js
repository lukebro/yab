import Init from './commands/Init'
import List from './commands/List'

const config = {
	commands: {
		'list': List,
		'init': Init
	},
	options: {
		v: 'version'
	},
	ignore: ['**/node_modules/', '**/node_modules/**', '**/bower_components/', '**/bower_components/**', '**/.git/', '**/.git/**']
}

export default config
