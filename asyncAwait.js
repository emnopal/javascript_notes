// async

/*
// penulisan syntax async yg salah

const getCoffee = () => {
    return new Promise(resolve, reject) => {
        // async process here
    }
};

const getCoffeeCallback = () => {
    // async code here
    callback(<async code>);
};

// function makeCoffee() {
//     const coffee = getCoffee(); // async process menggunakan promise
//     console.log(coffee);
// };

// itu salah

// yg benar
// untuk Promise
function makeCoffee() {
    getCoffee().then(coffee => {
        console.log(coffee);
    });
};

// untuk callback
function makeCoffeeCallback() {
    getCoffeeCallback(function(coffee) {
        console.log(coffee);
    });
};

// dan semenjak ES8 (2017), kita bisa pakai keyword async await
// sehingga kita bisa tulis fungsi async dengan gaya synchronous

async function makeCoffee() {
    const coffee = await getCoffee(); // async process menggunakan promise
    console.log(coffee);
};

makeCoffee();
*/

// contoh keyword async await
const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    });
};

// call async (promise) tanpa keyword async-await
// function makeCoffee() {
//     getCoffee().then(coffee => {
//         console.log(coffee);
//     });
// }

// ini tanpa handling rejection
// async function makeCoffee() {
//     const coffee = await getCoffee();
//     console.log(coffee);
// };

// ini dengan handling rejection
async function makeCoffee() {
    try{
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (rejectedReason){
        console.log(rejectedReason);
    }
};

makeCoffee();
