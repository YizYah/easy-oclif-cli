#!/usr/bin/env node

const shell = require('shelljs')
const codeDir = process.argv[2]

function createCodeBase(codeDir){
    // console.log(`hello world ${codeDir}`)

    const templateDir = __dirname + '/template'
    shell.exec(`npx ns-flip generate ${codeDir} -t ${templateDir}`)

}

if (codeDir) {
    const { spawn } = require('child_process')
    const templateDir = __dirname + '/template'
    const shell = spawn('npx',['ns-flip', 'generate', codeDir, '-t', templateDir], { stdio: 'inherit' })
    shell.on('close',(code)=>{console.log('[shell] terminated :',code)})
    // createCodeBase(codeDir)
} else {
    console.error('You need to provide a path to the new code base.' +
        '  Usage:\n\teasy-oclif-cli path/to/new/codebase')
}
