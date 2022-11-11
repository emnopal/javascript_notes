// basic concept of class is in object, map and array

// for example in object
// this is example to declare class mail
// with form as properties
// and sendMessage as method
// but write class like this is not flexible
// since they can't do class feature like: access modifier, inheritance,
// abstraction, interface and polymorphism
const mail = {
    from: "pengirim@dicoding.com",
    sendMessage: function (msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`); // keyword this refers to object
    }
};

console.log(mail.from); // get from
mail.sendMessage('apakabar', 'penerima@dicoding.com'); // call method from object

// override their properties
mail.from = "test@mail.com";
console.log(mail.from);

// implements new method to class
mail.saveContact = function (addr) {
    console.log(`email saved ${addr}`);
};

// call method from class
mail.saveContact("test@mail.com");


// initialize class with function
// for without prototype approach, the method and properties should be
// initialize first
// note: javascript is only have private and public access modifier
function Mail() {
    // create public access modifier
    this.from = 'pengirim@dicoding.com';

    // for without prototype approach, this should be inside function
    // this.date = Date.now();

    // for without prototype approach, this should be inside function
    // this.sendMessage = function(msg, to) {
    //     console.log(`you send: ${msg} to ${to} from ${this.from}`);
    // };

    // using access modifier in function based class
    // create private access modifier
    var contacts = [];
    // this is equivalent with
    // this._contacts = []

    // to use private access modifier, you can only use private access modifier
    // inside function scope, for prototype approach, you can't use private properties
    // or method outside it
    this.addContact = function (to) {
        contacts.push(to);
    };
    // private method
    // this._addContact = function(to){
    //     contacts.push(to);
    // };
    // or
    // var addContact = function(to){
    //     contacts.push(to);
    // };
}

// cannot use static method or properties outside function
// even for prototype
// implements new properties to class
Mail.prototype.date = Date.now();

// implemets new method to class
Mail.prototype.sendMessage = function n(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from} (${this.date})`);
    // contacts.push(to); // cannot access contact outside function based class scope
};

// override properties
var currentdate = new Date();
Mail.prototype.date = currentdate.getFullYear();

// call the class
const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');
// cannot access contact since they private
// console.log(mail1.contacts); // undefined
// if you want to use it, you can create the method inside class to implements it
mail1.addContact('test'); // use private contacts inside class


// prototype object is internal property that always called (or available)
// when object created, you can use or not for prototype
// but best practice is when you use prototype

// check if the class has their own property
const mail2 = new Mail();
console.log(mail2.hasOwnProperty('sendMessage'));

// inheritance use prototype
// ChildClassName.prototype = new ParentClassName()

/*
NOTE:
Ketika kita meng-instantiate objek-objek lain, objek yang menggunakan
prototype tidak meng-copy atribut sendMessage ke setiap objek-objek.

Berbeda ketika kita tidak menggunakan prototype, semua attribute di-copy
ke setiap objek. Dengan demikian, penggunaan prototype dapat menghemat
alokasi memori yang digunakan.
*/



// with class keyword
// inheritance syntax
// class ChildClassName extends ParentClassName{}
class Mail2 {
    // you can add this in here
    // this.date = Date.now();

    // access modifier in class
    // without using `this` keyword
    // #contacts = []; // since ES12, avoid for using it nowadays (in future i think good to use this)

    // or for static method
    static _date;
    // also work for
    // static #date;

    // constructor is always called when object is initialize
    constructor(from = null) {
        // overriding constructor from parent class (for inheritance only)
        // super(attribute_that_want_to_use_in_parent_class);
        if (from === null) {
            this.from = 'pengirim@dicoding.com';
        } else {
            this.from = from;
        }
        this._date = this._getDate();

        // access modifier with `this` keyword
        this._contacts = [];
    }

    // for overriding method in parent class
    // function_that_want_to_override(){
    // add expression here
    // }

    // initialize setter and getter with keyword get and set (this is not available in other language wow)
    // this is also example of encapsulation
    // get from() {
    //     return this.from;
    // }

    // set from(from) {
    //     this.from = from;
    // }

    // private method
    // this is also example of encapsulation
    _getDate() {
        let date = new Date();
        return date.getFullYear();
    }
    // or
    // #getDate(){
    //     let date = new Date();
    //     return date.getFullYear();
    // }

    // static method
    static isValidPhone(phone) {
        return typeof phone === 'number';
    }
    // private static method
    // static #isValidPhone(phone) {
    //     return typeof phone === 'number';
    // }
    // or
    // static _isValidPhone(phone) {
    //     return typeof phone === 'number';
    // }
    // calling static method
    // isPhoneValid(phone){
    //     return Mail2.isValidPhone(phone);
    // }


    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from} (${this.date})`);
        this._contacts.push(to);
        // or
        // this.#contacts.push(to); // if you are using #contacts;
    }

    // this is also example of encapsulation
    getContacts() {
        return this._contacts;
        // or
        // this.#contacts; // if you are using #contacts;
    }
}

const mail3 = new Mail2();
mail3.sendMessage('hallo', 'penerima@dicoding.com');

// to initialize static method, no need to create an instance
// example
console.log(Mail2.isValidPhone(0879700)); // true

// accessing private attribute with method
console.log(mail3.getContacts());

// accessing private method
console.log(mail3._getDate());


// object composition, inherit many class for a class
// [1] list of abstractions
const canSendMessage = self => ({
    sendMessage: () => console.log('send message:', self.message)
});

const checkIsValidPhone = self => ({
    isValid: () => console.log('valid phone', self.from)
});

// [2] crate object composition
const personalEnterprise = (from, message, store) => {
    // [3] attributes
    const self = {
        from,
        message,
        store
    };
    // [4] method
    const personalEnterpriseBehaviors = self => ({
        createCatalog: () => console.log('Catalog has created: ', self.store)
    });

    // [5] create object composition
    return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
};

const pe1 = personalEnterprise('pengirim@gmail.com', 'hei produk baru nih', 'Dicoding Store');
pe1.createCatalog(); //Catalog has created:  Dicoding Store
pe1.sendMessage(); //send message: hei produk baru nih

// js doesn't have destructor
