//  * 1. Buatlah class bernama Animal dengan ketentuan:
//  *    - Memiliki properti:
//  *      - name: string
//  *      - age: int
//  *      - isMammal: boolean
//  *    - Memiliki constructor untuk menginisialisasi properti:
//  *      - name
//  *      - age
//  *      - isMammal
class Animal {
    constructor(name, age, isMammal){
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

// * 2. Buatlah class bernama Rabbit dengan ketentuan:
// *    - Merupakan turunan dari class Animal
// *    - Memiliki method:
// *      - eat yang mengembalikan nilai string "${this.name} sedang makan!"
// *    - Ketika diinstansiasi, properti isMammal harus bernilai true
class Rabbit extends Animal {
    constructor(name, age){
        super(name, age, true);
        // for wrtiing unordered function arguments
        // see here: https://stackoverflow.com/questions/7047463/unordered-function-arguments-in-javascript
    }
    eat(){
        return `${this.name} sedang makan!`;
    }
}

// * 3. Buatlah class bernama Eagle dengan ketentuan:
// *    - Merupakan turunan dari class Animal
// *    - Memiliki method:
// *      - fly yang mengembalikan nilai string "${this.name} sedang terbang!"
// *    - Ketika diinstansiasi, properti isMammal harus bernilai false
class Eagle extends Animal {
    constructor(name, age){
        super(name, age, false);
        // for wrtiing unordered function arguments
        // see here: https://stackoverflow.com/questions/7047463/unordered-function-arguments-in-javascript
    }
    fly(){
        return `${this.name} sedang terbang!`;
    }
}

// * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
// *    - properti name bernilai: "Labi"
// *    - properti age bernilai: 2
const myRabbit = new Rabbit("Labi", 2);
console.log(myRabbit.name);
console.log(myRabbit.age);
console.log(myRabbit.isMammal);
console.log(myRabbit.eat());

// * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
// *    - properti name bernilai: "Elo"
// *    - properti age bernilai: 4
const myEagle = new Eagle("Elo", 4);
console.log(myEagle.name);
console.log(myEagle.age);
console.log(myEagle.isMammal);
console.log(myEagle.fly());
