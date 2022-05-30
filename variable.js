// in javascript (since ES6), there are 3 keyword to declare the variable
// the keyword is: var, let, const

// before ES6, only var, but since var is buggy, so let and const is created for
// since ES6 (in 2014 - 2015), using var is bad practice

/*
1.  var declarations are globally scoped or function scoped while let and const are block scoped.

2.  var variables can be updated and re-declared within its scope;
    let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.

3.  They are all hoisted to the top of their scope.
    But while var variables are initialized with undefined,
    let and const variables are not initialized.
    Note:   Hoisting is a JavaScript mechanism where variables and function declarations are moved to the
            top of their scope before code execution.

4.  While var and let can be declared without being initialized,
    const must be initialized during declaration.
*/

// 1
// var
if (1 === 1){ // True
    var VarVariable = "Hello scoped";
}
console.log(VarVariable);

// let (same with const)
if (1 === 1){ // True
    let LetVariable = "Hello scoped";
}
// console.log(LetVariable); // error, ReferenceError -> LetVariable is not defined

// 2
// var
// redeclared, no error
var RedeclaredVarVariable = "Hello redeclared";
var RedeclaredVarVariable = "Hello redeclared 2";

// update, no error
RedeclaredVarVariable = "Hello redeclared 3";
console.log(RedeclaredVarVariable);

// let
// redeclared, error
let RedeclaredLetVariable = "Hello redeclared";
// let RedeclaredLetVariable = "Hello redeclared 2"; // error

// update, no error
RedeclaredLetVariable = "Hello redeclared 3";
console.log(RedeclaredLetVariable);

// const
// redeclared, error
const RedeclaredConstVariable = "Hello redeclared";
// let RedeclaredConstVariable = "Hello redeclared 2"; // error

// update, error
// RedeclaredConstVariable = "Hello redeclared 3";
console.log(RedeclaredLetVariable);

// From: https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

// 3
// var
var HoistingVar;
console.log(HoistingVar); // no error but undefined
HoistingVar = "Test";

// let (const also)
let HoistingLet;
// console.log(HoistingLet); // error: not defined
HoistingLet = "Test";

// const, this is also for no 4
// const HoistingConst; // const must be initialized during declaration
// console.log(HoistingLet); // error: not defined
// HoistingConst = "Test"; // Attempting to override 'HoistingConst' which is a constant. (E013)

// --------------------------------------------------------------------------------------------------------

// statement adalah instruksi untuk melakukan sebuah aksi tertentu.
// Aksi ini bisa termasuk membuat variabel, melakukan perulangan, pengecekan kondisi, dll.
// Statement menunjukkan aksi yang dilakukan.
// Assignment adalah menginisialisasikan nilai ke dalam sebuah variabel dengan tanda sama dengan (=)
let a = 12;
let b = 12 + a;
let c;
if (a < b) {
    c = "yes";
}

// Error karena var lastName adalah sebuah statement untuk deklarasi variabel. Statement tidak bisa berada di posisi expression.
// var fullName = var lastName;


// Expression adalah unit kode yang dapat dievaluasi menjadi suatu nilai.
// Expression merupakan kode yang menghasilkan nilai.
console.log(a);
console.log(b);
console.log(c);

var fullName = (lastName = "Skywalker"); // (lastName = "Skywalker") merupakan expression, sehingga kode ini tidak error.
var fullName = "Luke" + "Skywalker"; // "Luke" + "Skywalker" juga merupakan expression, sehingga kode ini tidak error.

/*
JS Variable naming rules:
1.  Harus dimulai dengan huruf atau underscore (_).
2.  Dapat terdiri dari huruf, angka, dan underscore (_) dengan berbagai kombinasi.
3.  Tidak boleh mengandung spasi (whitespace).
    Jika penamaan variabel lebih dari dua kata, tuliskan secara camelCase. Contoh firstName, lastName, catName, dll.
4.  Tidak boleh mengandung karakter spesial (! . , / \ + * = dll.)
*/
