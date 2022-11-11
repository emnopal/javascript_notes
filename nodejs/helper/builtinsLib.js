/*
*
* Object.getOwnPropertyNames <- get member of object
* builtins object in js: global
*
* there is 3 levels in global object
*
* 1. true global: global, process, console, setTimeout, clearTimeout, setInterval, clearInterval and more
* 2. inheritance global: Map, Array, Number, String and more
* 3. pseudo-globals (not a direct member of global object): module, __filename, __dirname, require
*
* */

// Here is member of global (entire global object)

const builtinsLib = Object.getOwnPropertyNames(global); // just substitute global keyword to another object

console.log(builtinsLib);