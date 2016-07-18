import This from './commands/This'
import Init from './commands/Init'
import List from './commands/List'
import Remove from './commands/Remove'

const config = {
	commands: {
		'this': This,
		'default': Init,
		'list': List,
		'remove': Remove,
	},
	ignore: ['**/node_modules/', '**/node_modules/**', '**/bower_components/', '**/bower_components/**', '**/.git/', '**/.git/**']
}

export default config
