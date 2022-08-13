class Tiger {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    }

    growl () { // method in js doesn't need to write function
        console.log('grrrrr!');
    }
}

module.exports = Tiger;