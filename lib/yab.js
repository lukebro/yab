#!/usr/bin/env node

var fs = require('fs')
var zip = require('archiver')('zip')
var path = require('path')
var Unzip = require('decompress-zip')
var chalk = require('chalk')

var templateDir = process.env.HOME + '/.yab'
var currentDir = process.cwd()
var args = [process.argv[2], process.argv[3]]

function saveTemplate(name) {
	zip.pipe(fs.createWriteStream(templateDir + '/' + name))

	zip.bulk([{ 
			cwd: currentDir,
			src: ['**/*'],
			expand: true,
			dot: true,
			ignore: ['**/node_modules/', '**/node_modules/**', '**/bower_components/', '**/bower_components/**', '**/.git/', '**/.git/**']
	}]).finalize()
}

function loadTemplate(name) {
	var template = templateDir + '/' + name

	if (! fs.existsSync(template)) {
		return false;
	}

	var unzipper = new Unzip(template)

	unzipper.extract({
		path: currentDir
	})

	return true;
}

function log(message) {
	var tag = chalk.blue.italic('yab: ')

	console.log(tag + chalk.green(message))
}

function list(message) {
	console.log("\t" + chalk.red(message))
}

(function() {

if (!fs.existsSync(templateDir)){
	fs.mkdirSync(templateDir);
}


if (args[0] === 'this') {
	log('Creating a new template named `' + args[1] + '`.')

	saveTemplate(args[1])

	return
} 

if (args[0] === 'list') {
	log('These are the current templates saved in yab:')

	var templates = fs.readdirSync(templateDir)

	templates.forEach(function (template) {
		list(template)
	})

	return
}

if (args[0] === 'remove') {
	log('Removed the template `' + args[1] + '`.')
	fs.unlinkSync(templateDir + '/' + args[1]);
	return
}

if (! loadTemplate(args[0])) {
	log('That template does not exists.  Create it with `yab this <name>`.')
	return
}

log('Scaffolded this directory with `' + args[0] + '`.')

})()
