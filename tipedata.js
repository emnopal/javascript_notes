// macam tipe data di js
// buat cek tipe data: typeof(Object type): string

// 1. undefined
let x;
console.log(typeof(x)); // undefined

// 2. number
let num = 12;
console.log(typeof(num)); // number

const aa = 12.75;
console.log(typeof(aa)); // number

const bb = 0.1275;
console.log(typeof(bb)); // number

// note for increment (and decrement)
console.log("\nPostfix: ");
let postfix = 5;
console.log(postfix++); // 5
console.log(postfix++); // 6
console.log(postfix); // 7
console.log(postfix); // 7
console.log(postfix++); // 7
console.log(postfix++); // 8
console.log(postfix); // 9

console.log("\nPrefix: ");
let prefix = 5;
console.log(++prefix); // 6
console.log(++prefix); // 7
console.log(prefix); // 7
console.log(++prefix); // 8
console.log(prefix); // 8


// 3. BigInt (start from ES11)
const bigNumber = 1234567890123456789012345678901234567890n; // this will not print scientific notation
const bigNumberButSmall = 7n; // this also work for small number
// const bigNumberButFloat = 7.5n; // this is not work for float
const myInt = 1234567890123456789012345678901234567890; // this will print scientific notation because it's too large

// for BigInt, if you do a math operator it will automatically import to int (but still bigint)
// example
console.log('5/2:', 5n/2n, '(not print 2.5n but 2n)'); // show 2n instead of 2.5n

console.log('bigNumber:', bigNumber, '(not using science notation), Type:', typeof(bigNumber)); // type: bigint
console.log('myInt:', myInt, '(using science notation), Type:', typeof(myInt)); // type: number
console.log('bigNumber also work for small number:', bigNumberButSmall, ', Type:', typeof(bigNumberButSmall)); // type: bigint


// 4. string
const strings = "test string";
console.log(typeof(strings)); // string

// string concantenate
const myName = "Luke";
console.log(`Hello, my name is ${myName}.`); // using `` instead of "" or ''

// 5. boolean
const boolTest = true;
console.log(typeof(boolTest)); // boolean

// 6. null
let someLaterData = null;
console.log(`${someLaterData}, type is ${typeof(someLaterData)}`); // null is considered as type of object

// 7. symbol
const id = Symbol("id");
console.log(id); // Symbol(id)
console.log(typeof(id)); // symbol

// Symbol disebut sebagai identifier yang unik karena meskipun kita membuat dua variabel symbol
// dengan nama atau deskripsi yang sama, kedua nilainya tetap dianggap berbeda

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);

// Symbol ini umumnya digunakan sebagai nama property dari Object
