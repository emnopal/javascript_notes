// import module

// import one module only
// const coffeeStock = require("./state").default; // original js
// import coffeeStock from "./state.js"; // ES6 js, change type in package.json to module

// const { VeganCoffeeStock, coffeeStock } = require("./state"); // original js
import { VeganCoffeeStock as vegan, coffeeStock } from "./state.js"; // ES6 js, change type in package.json to module

// import from module
import _ from 'lodash'; // must following lodash docs instruction -> use _

console.log("Hello");
console.log(coffeeStock);
console.log(vegan);

// lodash: utilitas untuk membuat JavaScript lebih mudah dengan
// menghilangkan kerumitan ketika menggunakan array, number, object, string, dll
// docs: https://lodash.com/

const myArray = [1, 2, 3, 4];
const sum = _.sum(myArray);

console.log(sum);
