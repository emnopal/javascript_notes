// JS Object -> like struct in Golang
// Object dapat simpan nilai dari beragam tipe data dan bentuk data
// lebih kompleks

// inisialisasi Object
const userObj = {};
// const userObj = new Object(); // bisa begini tapi bad practice

// Object isinya pair key:value, mirip dict di Python
// Object JS diluar JS disebut JSON

// contoh object
let obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3", // trailing commas is best practice
};

// data didalam scope object disebut juga dengan properties
// key sudah pasti dan wajib string
// sudah pasti maksudnya, kita gaperlu tulis "" sebelum inisialisasi key
// wajib string maksudnya, kalau kita assign array, numeric, boolean pasti error

// contoh lain object
const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
};

// print all object data
console.log(user);

// array inside object
const userProfile = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    friends: ["A", "B", "C"]
};
console.log(userProfile);
console.log(userProfile.friends);
userProfile.friends.push("D");
console.log(userProfile.friends);

// naming key object,
// 1. jgn ada spasi, 2. jgn ada special character, 3. awalnya harus huruf

// cara akses object
console.log(`Hello I'm ${user.firstName} ${user.lastName}, I'm ${user.age} years old`);

// atau dengan bracket [], tapi dia bad practice
console.log(`Hello I'm ${user['firstName']} ${user['lastName']}, I'm ${user['age']} years old`);

// kalau pake const, kita bisa update nilai di dalam object, kalau object nya enggak
/*
const cobaObject = {
    a: 'a'
}

const cobaObject = {
    b: 'b'
} // ini gabisa bakalan error, karena inisialisasi ulang object keseluruhan

cobaObject = {
    b: 'b'
} // ini gabisa bakalan error, karena update object keseluruhan

// update nilai didalam object
cobaObject.a = 'b' <- ini bisa gaakan error
*/

// tambahin nilai ke object
user.nationality = 'United States';
console.log(user['nationality']);

// hapus nilai object
delete user.isJedi;

// TODO: Search Another Object Method in JS

// default value
// get properties inside object, if properties not found in object
// properties will return the default value
// because without default value, the properties will return undefined
var {firstName, lastName, age, nationality} = user;
console.log(isJedi); // undefined

var {firstName, lastName, age, nationality, isJedi=false} = user;
console.log(isJedi); // false

// spread operator for object
// concantenate object
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };
const objFull = {...obj1, ...obj2}; // available since ES9
console.log(objFull);

// Destructuring
// do not use var, this is for example because we need to re-initialize again
// use const or let instead

// get properties without writing: objectName.propertiesName
// name must be follow propeties inside object
var {firstName, lastName, age, nationality} = user;
console.log(firstName);

// if you don't want to follow properties inside object
var {firstName: name0, lastName: name1, age: timeElapse, nationality: country} = user;
console.log(name1);

// get only one variable
var {nationality} = user;
console.log(nationality);

// get only one variable as new variable
var {nationality: nat} = user;
console.log(nat);
