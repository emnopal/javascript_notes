class Wolf {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    }

    howl() { // method in js doesn't need to write function
        console.log('owooooo!')
    }
}

module.exports = Wolf;