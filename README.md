# yet another bootstrapper 🌯
A CLI tool that lets you save and bootstrap templates quick and easily.

All templates must be initialized manually, none come out of the box.  The good news is you can make anything a template, just pop it into a directory and `yab this <name>` and boom thats it.

## great for
- adding certain files/folders quickly to a project (ex. gulpfile.js)
- scaffolding an entire project (ex. express.js, vue.js, etc.)
- never having to keep and maintain scaffolds/template folders again
- keeping branding items like logos in a template to easily insert into a project
- prevent copy/pasting the same files and folders


## installation
```bash
npm install -g yab
```

## usage
Here are the basic commands that yab CLI offers.

```bash
# Create a new template of the current directory and give it a name.
# yab will save an entire copy of the directory
yab this <name>
```

```bash
# Scaffold the current directory with a template.
# yab will add the template to the current directory
yab <name>
```

```bash
# List the current templates saved in yab.
yab list
```

```bash
# Remove a template.
yab remove <name>
```

## inspiration
I created this CLI tool because I found myself always keeping an empty project directory for some small NPM projects so I can easily scaffold them.  I wanted a way to be able to generate these scaffolds with a command.

Some CLI generators like [yeoman](https://github.com/yeoman/yo) require too much effort to create a generator.  They're great for common bootstraps, but for small or customized scaffolds it's not worth the effort.  yab bridges that gap.

## license
[The MIT License (MIT)](https://opensource.org/licenses/MIT)
