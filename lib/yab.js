#!/usr/bin/env node

var fs = require('fs')
var zip = require('archiver')('zip')
var path = require('path')
var Unzip = require('decompress-zip')

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

if (args[0] === 'this') {
	console.log('yab: Creating a new scaffolding of the current directory by the name of `' + args[1] + '`.')

	saveTemplate(args[1])
	process.exit()
} 

if (args[0] === 'list') {
	console.log('yab: These are the current scaffoldings saved in yab.')

	var templates = fs.readdirSync(templateDir)

	templates.forEach(function (template) {
		console.log(template)
	})

	process.exit()
}

if (args[0] === 'remove') {
	console.log('yab: Removed the scaffolding `' + args[1] + '`.')
	fs.unlinkSync(templateDir + '/' + args[1]);

	process.exit()
}

if (! loadTemplate(args[0])) {
	console.log('yab: That scaffolding does not exists.  Create it with `yab new [name]`.')
	process.exit()
}

console.log('yab: Scaffolded this directory with `' + args[0] + '`.')
