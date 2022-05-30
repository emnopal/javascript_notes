// normal function
function greeting(name, language = 'English') { // default value in function parameter
    let greets;
    if(language === "English") {
        greets = `Good Morning ${name}!`;
    }
    if (language === "French") {
        greets = `Bonjour ${name}!`;
    }
    if (language === "Indonesia"){
        greets = `Selamat Pagi ${name}!`;
    }
    return greets;
} // no need ;, because this function is not a statement

const gret = greeting("test");
console.log(gret);

// function as expression
let otherGreeting = function(name, language = 'English'){
    let greetingLang;
    if(language === "English") {
        greetingLang = `Good Morning ${name}!`;
    }
    if (language === "French") {
        greetingLang = `Bonjour ${name}!`;
    }
    if (language === "Indonesia"){
        greetingLang = `Selamat Pagi ${name}!`;
    }
    return greetingLang;
}; // need ;, because this is statement
let grets = otherGreeting("test");
console.log(grets);

// destructuring object as function parameter (similar to **kwargs in python)
const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
};
function introduce({displayName, fullName}) { // use destructuring as func params
    console.log(`${displayName} is ${fullName}`);
}
introduce(user);

// rest parameters (similar to *args in python)
const sum = function(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
};
console.log(sum(1, 2, 3, 4, 5)); // unpacking array into each partition

// arrow function
const hello = () => "Hello";
// const hello = () => { // alternative
//     return "Hello"; // if not one line, use return statement
// };
console.log(hello()); // without any params

const sayHello = name => `hello my name is ${name}`; // for only 1 params
// const sayHello = name => { // alternative
//     return `hello my name is ${name}`; // if not one line, use return statement
// };
console.log(sayHello("John"));

const sayHello2 = (name, country) => `hello my name is ${name} from ${country}`; // more than 1 params
// const sayHello2 = (name, country) => { // alternative
//     return `hello my name is ${name} from ${country}`; // if not one line, use return statement
// };
console.log(sayHello2("John", "US"));
