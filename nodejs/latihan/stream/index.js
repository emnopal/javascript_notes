const fs = require('fs');
const {resolve} = require('path');

const absPath = resolve(__dirname); // get absolute path to project
const input = `${absPath}/input.txt`
const output = `${absPath}/output.txt`

const readableStream = fs.createReadStream(input, {
    highWaterMark: 15 // set chunk to 15, it means every 15 character it will splitted
});

const writableStream = fs.createWriteStream(output);

// opening readable
readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`);
    } catch(ENOENT) {

    }
});

// closing readable
readableStream.on('end', () => writableStream.end());

