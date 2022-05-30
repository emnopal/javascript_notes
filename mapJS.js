// map is like object but key can be string or anything else

// initalize map
// const myMap = new Map();

const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true],
]);

console.log(myMap);

// array inside map
const otherMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true],
    ['map', ['string', 'numeric', 'boolean', 'anything_else']],
]);

console.log(otherMap);

// object inside map
const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
};

const objectMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true],
    ['map', ['string', 'numeric', 'boolean', 'anything_else']],
    ['user', user],
]);

console.log(objectMap);


// setter and getter map object

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"],
]);

// best practice how to operate map
console.log(capital.size); // count map size
console.log(capital.get("London")); // get key that contains london
capital.set("New Delhi", "India"); // set new key:value pair to map
console.log(capital.size); // new count map size
console.log(capital.get("New Delhi")); // get key that contains new delhi

console.log(...capital); // unpack or spread captial map

// or you can get or set value in map with this (bad practice)
// why bad practice?
/*
Ketika kita menetapkan nilai map seperti di atas,
data akan disimpan sebagai generic object. Ini akan
mengakibatkan data tidak tersimpan dalam Map query
dan tidak bisa menggunakan fitur dari Map seperti .has atau .delete.
*/

// set
// capital['Beijing'] = 'China';
// or
// capital.Seoul = 'South Korea';
// console.log(capital); // new count map size

// and get their value
// console.log(capital['London']);
// or
// console.log(capital.Jakarta);

// has and delete
console.log(capital.has("New Delhi")); // true <- check if new delhi in map

capital.delete("New Delhi"); // Delete New Delhi from Map

console.log(capital);
