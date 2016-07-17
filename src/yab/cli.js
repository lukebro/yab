import path from 'path'
import log from '../util/log'
import archive from '../util/archive'
import meow from 'meow'

import textDescription from '../text/description'
import textHelp from '../text/help'

const cli = meow({
	description: textDescription,
	help: textHelp,
})

const templateDir = process.env.HOME + '/.yab'
const currentDir = process.cwd()
const args = [process.argv[2], process.argv[3]]

const ignoredDirectories = ['**/node_modules/', '**/node_modules/**', '**/bower_components/', '**/bower_components/**', '**/.git/', '**/.git/**']

var app = {
	init() {
		log.msg('Initializing yab!')
	}
}

export default app
