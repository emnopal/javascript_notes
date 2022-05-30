// always false condition
/*
Number 0
BigInt 0n
String kosong seperti "" atau ''
null
undefined
NaN, atau Not a Number
*/

// null coalesce
let a = null;
a ?? console.log('b'); // start from ES11
// explanation: if a is null then console.log('b') otherwise is a

// ternary operator
let b = 1;
b > 1 ? console.log('True'): console.log("False");
// console log true if b > 1 otherwise false

// switch case syntax
/*
switch (expression) {
    case value1:
        // do something
        break;
    case value2:
        // do something
        break;
    // if case has same do something
    case value3:
    case value4:
        // do something
        break;
    default:
        // do something else
}
*/

// loop
/*
// for
for (let intial statement; condition; increment){
    // statement here
}

// for..of (same with foreach)
for(item of Array){
    // statement here
}

// or you can use
Array.forEach(
    element => {
        // use element here
    }
)

// while
while (condition){
    // statement here
}

// do while
do {
    // statement here
} while (condition);

*/
