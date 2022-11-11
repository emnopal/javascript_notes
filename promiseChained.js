// chaining promise
// Dengan promise kita dapat melakukan proses asynchronous secara berantai

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
        .then((value) => {
            console.log(value); // kalo si cek stok kopi nya sukses bakal print resolve disini
            return brewCoffee(); // dia panggil lagi fungsi buat buat kopi
        })
        .then((value) => {
            console.log(value); // kalo si buat kopi ini sukses dia bakal print resolve disini
            state.isCoffeeMachineBusy = false;
        })
        .catch((rejectedReason) => {
            console.log(rejectedReason); // ini kalo semua proses gagal, dia bakal panggil kesini
        });
}

makeEspresso();
