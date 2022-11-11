const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
};

// state.isCoffeeMachineBusy = true; // uncomment line ini untuk melihat contoh rejected

const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan.");
            } else {
                reject("Maaf, mesin sedang sibuk.");
            }
        }, 1000);
    });
};

const checkStockCoffee = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi.");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 1500);
    });
};

const boilWater = () => {
    return new Promise((resolve, reject) => {
        console.log("Memanaskan air...");
        setTimeout(() => {
            resolve("Air panas sudah siap!");
        }, 2000);
    });
};

const grindCoffeeBeans = () => {
    return new Promise((resolve, reject) => {
        console.log("Menggiling biji kopi...");
        setTimeout(() => {
            resolve("Kopi sudah siap!");
        }, 1000);
    });
};

const brewCoffee = () => {
    console.log("Membuatkan kopi Anda...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap!");
        }, 2000);
    });
};

async function makeEspresso() {
    try {
        await checkAvailability(); // check coffee machine availability
        await checkStockCoffee(); // check stock of coffee
        await Promise.all([boilWater(), grindCoffeeBeans()]); // run simultanous between boil water and grind coffee beans
        const coffee = await brewCoffee(); // brew coffee
        console.log(coffee); // if success, then print coffee resolve
    } catch (rejectedReason) {
        console.log(rejectedReason); // if failed, then print reject reason
    } finally {
        state.isCoffeeMachineBusy = false;
    }
}

makeEspresso();
