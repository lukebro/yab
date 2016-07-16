'use strict'

var fs = require('fs')
var zip = require('archiver')('zip')
var path = require('path')
var Unzip = require('decompress-zip')
var chalk = require('chalk')

var templateDir = process.env.HOME + '/.yab'
var currentDir = process.cwd()
var args = [process.argv[2], process.argv[3]]

function saveTemplate(name) {
	zip.pipe(fs.createWriteStream(templateDir + '/' + name + '.zip'))

	zip.bulk([{ 
			cwd: currentDir,
			src: ['**/*'],
			expand: true,
			dot: true,
			ignore: ['**/node_modules/', '**/node_modules/**', '**/bower_components/', '**/bower_components/**', '**/.git/', '**/.git/**']
	}]).finalize()
}

function loadTemplate(name) {
	var template = templateDir + '/' + name + '.zip'

	if (! fs.existsSync(template)) {
		return false;
	}

	var unzipper = new Unzip(template)

	unzipper.extract({
		path: currentDir
	})

	return true;
}

function log(message, prefix = true) {
	var tag = chalk.red.bold.italic('yab: ')
	var noTag = Array(6).join(' ')

	return console.log((prefix ? tag : noTag) + chalk.white(message))
}

function list(message) {
	return console.log(Array(6).join(' ') + chalk.yellow.italic(message))
}

function help(message, heading = false, color = chalk.blue) {
	
	if (heading) {
		return console.log(color.italic(message))
	}

	return console.log(Array(6).join(' ') + color(message))
}

const Yab = function() {

if (!fs.existsSync(templateDir)){
	fs.mkdirSync(templateDir);
}

if (args[0] === undefined) {
	args[0] = 'help'
}

if (args[0] === 'this') {
	log('Creating a new template named `' + args[1] + '`.')

	saveTemplate(args[1])

	return
} 

if (args[0] === 'list') {
	var templates = fs.readdirSync(templateDir)

	if (!templates.length) {
		log('No templates exists!')
		log('Create a new template with ' + chalk.red.bold('yab this <name>') + ' while in the directory.', false)

		return
	}

	log('These are the current templates saved:')
	templates.forEach(function (template) {
		if (template.indexOf('.zip') != -1) {
			list(template.slice(0, -4))
		}
	})

	return
}

if (args[0] === 'remove') {
	log('The template ' + chalk.yellow.italic(args[1]) + ' has been removed.')
	fs.unlinkSync(templateDir + '/' + args[1]);
	return
}

if (args[0] === 'help') {

	help(chalk.red.bold.italic('yab:') + ' yet another bootstrapper', true, chalk.white)
	help('commands', true, chalk.bold.blue)
	help(chalk.bold.red('yab this <name>') + '     create a new template from the current directory')
	help(chalk.bold.red('yab <name>') + '          scaffold current directory with a template')
	help(chalk.bold.red('yab list') + '            list all available templates')
	help(chalk.bold.red('yab remove <name>') + '   remove a template')
	return
}

if (! loadTemplate(args[0])) {
	log('The template ' + chalk.yellow.italic(args[0]) + ' does not exists.')
	log('While in the template directory, create it with ' + chalk.bold.red('yab this ' + args[0]) + '.', false)
	return
}

log('Scaffolded this directory with ' + chalk.italic.yellow(args[0]) + '.')

}

module.exports = Yab
