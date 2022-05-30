/*
Output yang dihasilkan baik ketika fulfilled ataupun rejected masih
berupa Promise, bukan nilai yang dibawa oleh fungsi resolve atau reject.
Lantas bagaimana kita bisa mengakses nilai yang dibawa oleh fungsi-fungsi
tersebut? Caranya adalah menggunakan method .then() yang tersedia pada
objek Promise.
*/
// contoh

const stock = {
    coffeeBeans: 250,
    water: 1000,
};

const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("Stok cukup. Bisa membuat kopi");
        } else {
            reject("Stok tidak cukup");
        }
    });
};

const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
};

const handleFailure = rejectionReason => {
    console.log(rejectionReason);
};

// ini simple
checkStock().then(handleSuccess, handleFailure);

// bisa kita split jadi begini:
checkStock()
    .then(handleSuccess, null)
    .then(null, handleFailure);

// kita juga bisa ubah .then jadi .catch buat rejected

const checkStockRejected = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans < 16 && stock.water < 250) {
            resolve("Stok cukup. Bisa membuat kopi");
        } else {
            reject("Stok tidak cukup");
        }
    });
};

// ini kalo pake catch
checkStockRejected()
    .then(handleSuccess)
    .catch(handleFailure);
