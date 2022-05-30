// most simple async function
// setTimeout
console.log("Selamat datang!");
setTimeout(() => {
    console.log("Terima kasih sudah mampir, silakan datang kembali!");
}, 4000);
console.log("Ada yang bisa dibantu?");

// salah satu fungsi async yg salah
const orderCoffee = callback => { // jgn lupa inisialisasi callback disini sbg parameter
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!"; // jika tidak pake callback, line ini tidak akan pernah dieksekusi
        callback(coffee); // ini fungsinya untuk menggantikan return karena ini akan dieksekusi setelah timeout selesai
    }, 3000);
    // return coffee; // return coffee akan dieksekusi terlebih dahulu, sehingga akan null hasilnya
};

// eksekusi spt ini akan membuat error code, karena dia ada function callback
// const coffee = orderCoffee();
// console.log(coffee);

// buat spt ini
orderCoffee(coffee => {
    console.log(coffee);
});
