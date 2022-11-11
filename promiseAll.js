// menjalankan promise sekaligus tanpa harus memperdulikan urutan nya
// atau bisa disebut concurrency

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

function makeEspresso() {
    checkAvailability() // cek ketersediaan
        .then((value) => {
            console.log(value); // kalo sukses dia bakal print resolve disini
            return checkStockCoffee(); // dia panggil lagi check stok kopi
        })
        .then(value => {
            console.log(value);
            // pada proses ini, air dimasak dan biji kopi digiling
            // kemudian digabungkan menjadi satu lewat array
            const promises = [boilWater(), grindCoffeeBeans()];
            // si boilWater and grindCoffeeBeans ini disatuin di array
            return Promise.all(promises); // array ini di eksekusi oleh fungsi Promise all()
        })
        .then((value) => {
            console.log(...value); // kalo si promise all ini sukses dia bakal print resolve disini
            // (dalam bentuk array, jadi pake ... biar jadi string)
            // jadi kopi udah siap buat dimasak
            return brewCoffee(); // dia panggil lagi fungsi buat buat kopi (masak kopi)
        })
        .then(value => {
            console.log(value); // kalo si buat kopi ini sukses dia bakal print resolve disini
            state.isCoffeeMachineBusy = false; // karena tadi mesin lagi sibuk, maka set true, dan karena udah selesai jadi set false
        })
        .catch(rejectedReason => {
            console.log(rejectedReason);
            state.isCoffeeMachineBusy = false;
        });
}

makeEspresso();
