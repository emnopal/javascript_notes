class Coffee {
    constructor(name, price) {
        this.name = name;
        this.price = price;

        if (name === null || name === undefined) {
            this.name = 'Tubruk';
        }

        if (price === null || price === undefined) {
            this.price = 15000;
        }
    }

    // method which run if events coffee-order happened
    makeCoffee(){
        console.log(`Kopi ${this.name} telah dibuat!`);
    }

    makeBill(){
        console.log(`Bill sebesar ${this.price} telah dibuat!`);
    }

}

module.exports = Coffee; // to make entire script available to another script or another project (like pub in rust)