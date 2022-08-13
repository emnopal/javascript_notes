const { EventEmitter } = require('events');

const myEmitter = new EventEmitter();

const birthdayEventListener = ({name}) => {
    console.log(`Happy birthday ${name}!`);
}

myEmitter.on('birthday', birthdayEventListener);

// trigger events 'coffee-order'
myEmitter.emit('birthday', {name: 'Ayank'});