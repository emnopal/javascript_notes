// disadvantages dari callback ini adalah, jika banyak fungsi bergantung ke fungsi lain (callback hell)
// spt ini contohnya
/*
function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients, function(ingredients) {
        makeTheDough(ingredients, function(dough) {
            pourDough(dough, function(pouredDough) {
                bakeACake(pourDough, function(cake) {
                    console.log(cake);
                })
            })
        })
    });
}
// versi synchronous nya
function makeACake(...rawIngredients) {
    const ingredients = collectIngredients(rawIngredients);
    dough = makeTheDough(ingredients);
    pouredDough = pourDough(dough);
    cake = bakeACake(pouredDough);
    console.log(cake);
}

bakalan pusing

// solusi, pake promise
function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients)
        .then(makeTheDough)
        .then(pourDough)
        .then(bakeACake)
        .then(console.log);
}

keyword promise: .then
tiga proses promise:
1. Pending (Janji sedang dalam proses)
2. Fulfilled (Janji terpenuhi)
3. Rejected (Janji gagal terpenuhi)
*/

// then, gimana cara buat object Promise ini?
// misal
// ini contoh yg salah, karena akan buat error
// const coffee = new Promise();
// TypeError: Promise resolver undefined is not a function

/*
Di dalam constructor Promise, kita perlu menetapkan resolver
function atau bisa disebut executor function. Fungsi tersebut
akan dijalankan secara otomatis ketika constructor Promise dipanggil.
*/

// contoh executorFunction
// ini otomatis kepanggil ketika objek Promise di inisialisasikan
const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        resolve("Kopi berhasil dibuat"); // run ketika promise berhasil dilakukan
        // kondisi promise akan berubah dari pending ke fulfilled
    } else {
        reject("Mesin kopi tidak bisa digunakan"); // run ketika promise gak dapat terpenuhi
        // kondisi promise akan berubah dari pending ke rejected
    }
};

// ini yang bener, dia harus pass executorFunction ke Promise constructor
const makeCoffee = () => new Promise(executorFunction);
const coffeePromise = makeCoffee();
console.log(coffeePromise);
// kalo berhasil: Promise { 'Kopi berhasil dibuat' }
// kalo gagal: Promise { <rejected> 'Mesin kopi tidak bisa digunakan' },
// jadi code block, kode selanjutnya bakalan gagal diakses

/*
Output yang dihasilkan baik ketika fulfilled ataupun rejected masih
berupa Promise, bukan nilai yang dibawa oleh fungsi resolve atau reject.
Lantas bagaimana kita bisa mengakses nilai yang dibawa oleh fungsi-fungsi
tersebut? Caranya adalah menggunakan method .then() yang tersedia pada
objek Promise.
*/
