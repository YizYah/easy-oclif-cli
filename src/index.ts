#!/usr/bin/env node
/* eslint no-console: 0 */
const codeDir = process.argv[2]

if (codeDir) {
    console.log('Welcome to easy-oclif-cli! This process may a few minutes.' +
                    '  We will download a temporary version of ns-flip, which will install ' +
                    '  needed packages. You will have to enter some information at the prompts.')
    const { spawn } = require('child_process')
    const templateDir = __dirname + '/../src/template'
    const shell = spawn('npx',['ns-flip', 'generate', codeDir, '-t', templateDir], { stdio: 'inherit' })
    shell.on('close',(code)=> {
        if (code === 0) console.log(`Follow the rest the instructions at https://www.npmjs.com/package/easy-oclif-cli to proceed!`)
    })
} else {
    console.error('You need to provide a path to the new code base.' +
        '  Usage:\n\teasy-oclif-cli path/to/new/codebase')
}
