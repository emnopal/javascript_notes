/*
* CAUTION: Do not attempt to run it
* process is like system library in python
* it can manipulate how do the program run
*
* */

// Example

// 1. process.env <- edit, manipulate or conditioning entire app based on set of env
// process.env can also edit or see env set from system

// using dotenv

// require('dotenv').config(); // if we want to read from dotenv file

const changeStage = new Server({ // ignore this error, since we only use this as example
    host: process.env.STAGE.toLowerCase() !== 'production' ? '127.0.0.1:5000': 'example.com'
})

// append from execution: NODE_ENV=production node processObj.js

const changeStages = new Server({ // ignore this error, since we only use this as example
    host: process.env.NODE_ENV.toLowerCase() !== 'production' ? '127.0.0.1:5000': 'example.com'
})


// 2. get memory usage
const cpuInformation = process.memoryUsage();
console.log(cpuInformation);

// 3. using arguments in execution (or use node-optimist)
// example: node processObj.js arg1 arg2
// arg    : [0]  [1]           [2]  [3]

// usage example:

const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Hello ${firstName} ${lastName}`);

// to get all arguments as map or object (without library)
// from: https://stackoverflow.com/questions/4351521/how-do-i-pass-command-line-arguments-to-a-node-js-program
function getArgs () {
    const args = {};
    process.argv
        .slice(2, process.argv.length)
        .forEach( arg => {
            // long arg
            if (arg.slice(0,2) === '--') {
                const longArg = arg.split('=');
                const longArgFlag = longArg[0].slice(2,longArg[0].length);
                args[longArgFlag] = longArg.length > 1 ? longArg[1] : true;
            }
            // flags
            else if (arg[0] === '-') {
                const flags = arg.slice(1,arg.length).split('');
                flags.forEach(flag => {
                    args[flag] = true;
                });
            }
        });
    return args;
}
const args = getArgs();
console.log(args);

/*
* input: node config/build.js -lHRs --ip=$HOST --port=$PORT --env=dev
* output: {l: true, H: true, R: true, s: true, ip: '127.0.0.1', port: '8080', env: 'dev'}
* */

