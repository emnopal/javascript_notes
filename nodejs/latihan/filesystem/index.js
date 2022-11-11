const fs = require('fs');


const fileReadCallback = (error, data) => {
    if(error) {
        console.log('File not found');
        return;
    }
    console.log(data);
};

fs.readFile('notes.txt', 'UTF-8', fileReadCallback);