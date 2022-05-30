// array

let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray[1]); // accessing one element in array with index
console.log(myArray); // accessing all array object
console.log(myArray[5]); // undefined, since array only 0 to 4
console.log(myArray.length); // length of array

// push, append data to array
myArray.push('test');
console.log(myArray);

// another push array
let evenNumber = [];

for (let i=1; i<=100; i++){
    if (i % 2 == 0){
        evenNumber.push(i);
    }
}

console.log(evenNumber);

// or
let evenNumberAlt = [...Array(100).keys()].map(i => i + 1).filter(x => x%2 === 0);
// generate array from 0 to 100 then + 1 after it filter with x mod 2 equals 0
console.log(evenNumberAlt);


// pop, delete last element of array
myArray.pop(); // no parameter required
console.log(myArray);

// shift, delete first element of array
myArray.shift();
console.log(myArray);

// unshift, append to first element in array
myArray.unshift('Test');
console.log(myArray);

// delete array data based on index, using delete (bad practice)
// delete myArray[0];
// console.log(myArray);

// delete array based on index
myArray.splice(0, 1);
console.log(myArray);

// delete multiple array value based on index start from splice(start, count_deleted_value)
myArray.splice(0, 2); // delete 2 value start from index 0 -> index[0, 1]
console.log(myArray);

// join array to string with separator
myArrayJoin = myArray.join("&");
console.log(myArrayJoin);

// TODO: Search Another Array Method in JS


// Spread operator (...)
console.log(...myArray); // accessing all array object as string (by extracting them)
// it's like we are writing console.log(myArray[0], myArray[1], etc...)

// also we can concantenate 2 or more arrays
let arr0 = [1,2,3];
let arr1 = [4,5,6];
let arr2 = [7,8,9];
let arrTotal = [...arr0, ...arr1, ...arr2];
console.log(arrTotal);

// destructuring array
// do not use var, this is for example because we need to re-initialize again
// use const or let instead

var favorites = ["Seafood", "Salad", "Nugget", "Soup"];

// get all value
var [firstFood, secondFood, thirdFood, fourthFood] = favorites;

console.log(firstFood);

// get only some value
var [, , thirdFood, ] = favorites;
console.log(thirdFood);

// without var (let or const)
[, , thirdFood, ] = favorites;
console.log(thirdFood);

// swapping variable
let a = 0;
let b = 1;
let temp;
console.log("Before swap: ", a, b);

// swap without destructuring
temp = a;
a = b;
b = temp;
console.log("After swap: ", a, b);

// swap with destructuring
[a, b] = [b, a];
console.log("After swap: ", a, b);

// default value in array destructuring
var food = ['fried rice'];
var [favorites0, favorites1] = food;
console.log(favorites0); // fried rice
console.log(favorites1); // undefined

// with default value
var food = ['fried rice'];
var [favorites0, favorites1 = 'chicken nugget'] = food;
console.log(favorites0); // fried rice
console.log(favorites1); // chicken nugget
