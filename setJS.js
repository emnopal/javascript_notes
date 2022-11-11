// set adalah kumpulan nilai (set of values)
// data set tidak berurutan, tidak memiliki indeks dan bersifat unique
// sehingga tidak ada duplikasi

const numberSet = new Set([1, 4, 6, 4, 1]);

console.log(numberSet);

// add data to set
numberSet.add(2);
numberSet.add(5);
numberSet.add(8);
numberSet.add(10);
numberSet.add(10);
numberSet.add(10);
console.log(numberSet);

// if you want to sort their value (set), change it to array

const numberSetArray = [...numberSet]; // change to array
console.log(numberSetArray);

const sortedNumberSetArray = numberSetArray.sort((a, b) => a - b); // sort
console.log(sortedNumberSetArray);

// delete data from set
numberSet.delete(5);
console.log(numberSet);
