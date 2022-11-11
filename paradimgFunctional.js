/*
Paradigma Functional Programming adalah paradigma pemrograman di mana proses
komputasi didasarkan pada fungsi matematika murni.

Functional Programming ditulis dengan gaya deklaratif yang berfokus pada
“what to solve” dibanding “how to solve” yang dianut oleh gaya imperatif.
*/

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

// contoh imperatif, how to solve, too much syntax? at least other can understand
var newNamesWithExcMark = [];
for (let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}
console.log(newNamesWithExcMark);

// contoh deklaratif, what to solve, how? don't care, gak one liner gak keren
var newNamesWithExcMark = names.map((name) => `${name}!`);
console.log(newNamesWithExcMark);

// konsep yang ada di functional programming
// pure function, immutability, recursice, and high-order function

/*
Pure Function merupakan konsep dari pembuatan fungsi yang mengharuskan
1. fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi
atau parameternya. Sehingga mau seperti apa keadaanya,
2. fungsi yang dibuat selalu menghasilkan sesuatu yang sama,
3. terkecuali bila fungsi tersebut diberikan nilai parameter yang berbeda.
4. dan pure function juga dilarang keras untuk mengubah nilai yang berada
di luar baik secara sengaja atau tidak sengaja
- lawan pure function adalah impure function
*/

// contoh impure function
let PI_ = 3.14;

const hitungLuasLingkaranImpure = (jariJari) => {
  return PI_ * (jariJari * jariJari);
};

console.log(hitungLuasLingkaranImpure(4)); // 50.24

PI_ = 5; // tidak sengaja nilai PI berubah

// hasilnya pun berubah
console.log(hitungLuasLingkaranImpure(4)); // 80

// contoh pure function
const hitungLuasLingkaranPure = (jariJari) => {
  const PI = 3.14;
  return PI * (jariJari * jariJari);
};

console.log(hitungLuasLingkaranPure(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah, tapi gak akan efek apapun

// hasilnya tidak akan berubah, sehingga safe
console.log(hitungLuasLingkaranPure(4)); // 50.24


// salah satu contoh impure function (lagi)
const createPersonWithAge = (age, person) => {
  person.age = age;
  return person;
};

const person = {
  name: 'Bobo'
}; // fungsi diatas juga akan ubah nilai person nya, jadi gak pure

const newPerson = createPersonWithAge(18, person);

console.log({
  person,
  newPerson
});

// solusi
// pure function
// pake destructuring objek, jadi gak harus ubah objek tersebut
// atau objek tersebut di copy
const safeCreatePersonWithAge = (age, person) => {

  // destructuring object
  return { ...person, age };

  // copy object
  // const newPerson = {...person};
  // newPerson.age = age;
  // return newPerson;
};

const safePerson = {
  name: 'Bobo'
};

const newSafePerson = safeCreatePersonWithAge(18, safePerson);

console.log({
  safePerson,
  newSafePerson
});


// Immutability
// Immutable berarti sebuah objek tidak boleh diubah
// setelah objek tersebut dibuat
// jadi kalo bisa, objek tersebut dibuat copy an nya dibanding diubah value nya

// ini tidak immutability
var user = {
  firstname: 'Harry',
  lastName: 'Protter', // ups, typo!
};

const renameLastNameUser = (newLastName, user) => {
  user.lastName = newLastName;
  // also not good since they not return anything
};

var newUserNotSafe = renameLastNameUser('Potter', user);

console.log(user);
console.log(newUserNotSafe); // undefined

// ini immutability
// buat copy an nya atau pake destructuring
var user = {
  firstname: 'Harry',
  lastName: 'Protter', // ups, typo!
};

const safeRenameLastNameUser = (newLastName, user) => {
  return { ...user, lastName: newLastName };
  // atau, buat copy nya
  // const newUser = {...user};
  // newUser.lastName = newLastName;
};

const newUser = safeRenameLastNameUser('Potter', user);

console.log(user);
console.log(newUser);

// rekursif
// contoh fungsi rekursif

// const faktorial = num => {
//   return num <= 1 ? 1: num * faktorial(num-1);
// };

// one line
const faktorial = num => num <= 1 ? 1: num * faktorial(num-1);

console.log(faktorial(4));
console.log(faktorial(5));
console.log(faktorial(6));

// contoh lain
// countdown
// const countDown = start => {
//   console.log(start);
//   if(start > 0) countDown(start-1);
// };

// countDown(10);


// Higher-order function
/*
Higher-Order Function merupakan fungsi yang dapat menerima fungsi
lainnya pada argumen; mengembalikan sebuah fungsi; atau bahkan keduanya

Teknik Higher-Order Function biasanya digunakan untuk:

1. Mengabstraksi atau mengisolasi sebuah aksi, event,
atau menangani alur asynchronous menggunakan callback, promise, dan lainnya.

2. Membuat utilities yang dapat digunakan di berbagai tipe data.

3. Membuat teknik currying atau function composition.
*/

// contoh high-order function
const hello = () => {
  console.log('Hello!');
};

const say = (someFunction) => {
  someFunction();
};

const sayHello = () => {
    return () => {
        console.log('Hello!');
    };
};

hello();
say(hello);
sayHello()();

// own map function
const newNames = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {

  const loopTrough = (arr, action, newArray = [], index = 0) => {
    return arr[index] ? loopTrough(
      arr, action, [...newArray, action(arr[index])], index + 1
    ): newArray;
  };

  return loopTrough(arr, action);
};


const newNamesEdited = arrayMap(newNames, (name) => `${name}!` );

console.log({
  newNames,
  newNamesEdited,
});


// https://stackoverflow.com/questions/62328661/what-is-the-difference-between-higher-order-functions-and-decorators
