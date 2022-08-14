/*
* Here is sample of js program
*
* initialize node js program: npm init
* */

const message = name => {
    console.log(`Hello, ${name}!`);
}

message("John Doe");

// Modularization

const Coffee = require('./src/Coffee'); // importing module or script
const coffee = new Coffee();
console.log({...coffee});

// const {firstName, lastName} = require('./src/user');

const {firstName: first, lastName: last} = require('./src/user'); // assign destructuring var into new var

console.log(first);
console.log(last);

// importing core module

const http = require('http');

// registering method makeCoffee as events-listener coffee-order
const { EventEmitter } = require('events');

const EventTrigger = new EventEmitter();

EventTrigger.on('coffee-order', ({name, price}) => {
    const coffee = new Coffee(name, price);
    coffee.makeCoffee();
    coffee.makeBill();
});

// trigger events 'coffee-order'
EventTrigger.emit('coffee-order', {name: 'Latte', price: 12500});

// JS filesystem IO

// accessing file in computer

const fs = require('fs');

// Async
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('File not found');
        return;
    }
    console.log(data);
};

fs.readFile('todo.txt', 'UTF-8', fileReadCallback);

// Sync
try{
    const data = fs.readFileSync('todo.txt', 'UTF-8');
    console.log(data);
}
catch (ENOENT) { // catch file not found
    console.log('File not found');
}

// Readable stream

/*
*
* Explanation in Indonesia
*
* Fungsi createReadStream() menerima dua argumen. Yang pertama adalah lokasi berkas yang hendak dibaca,
* dan yang kedua adalah objek konfigurasi. Di dalam objek konfigurasi kita bisa menetapkan ukuran buffer
* melalui properti highWaterMark. Nilai default dari properti ini adalah 16384 bytes (16kb). Anda tidak
* perlu menetapkan properti ini bila ingin tetap memiliki nilai default. Namun karena kita hanya menggunakan
* berkas teks yang ukurannya sangat kecil, jadi kita buat ukuran buffer menjadi 10 bytes. Itu artinya berkas
* akan dibaca setiap 10 karakter (1 karakter = 1 bytes).
*
* */

// this is async code
const readableStream = fs.createReadStream('./artikel.txt', {
    highWaterMark: 10 // will be streamed in every 10 character
});

readableStream.on('readable', () => { // create event readable then trigger write to console
    try {
        process.stdout.write(`[${readableStream.read()}]`); // write stream into logs
    } catch(ENOENT) {
        // catch the error when the chunk cannot be read.
    }
});

readableStream.on('end', () => { // if readStream is end, it will trigger Done
    console.log('Done');
});

// writableStream
// CAUTION: this will replace existing file

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!\n');
writableStream.end('Akhir dari writable stream!');
// writableStream.end(); // or this!

// this is also async code
fs.readFile('output.txt', 'UTF-8', fileReadCallback);



