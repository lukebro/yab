const path = require('path')
const log = require('../util/log')
const archive = require('../util/archive')
const meow = require('meow')

const cli = meow({
	description: require('../text/description'),
	help: require('../text/help'),
})

const app = {}

const templateDir = process.env.HOME + '/.yab'
const currentDir = process.cwd()
const args = [process.argv[2], process.argv[3]]

const ignoredDirectories = ['**/node_modules/', '**/node_modules/**', '**/bower_components/', '**/bower_components/**', '**/.git/', '**/.git/**']

class CLI {
	init() {
		log.msg('Initializing yab!')
	}
}

module.exports = CLI
