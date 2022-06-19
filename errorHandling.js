// try catch example

/*
try{
    // expression
} catch { // optional catch handling since ES10
    // expression
}

try{
    // expression
} catch { // optional catch handling since ES10
    // expression
} finally {
    // expression is executed either it's error or not
}

try {
    // expression
} catch (err){
    // expression
    // method
    err.name;
    err.message;
    err.stack;
}

try {
    // expression
} catch (err){
    // expression
    // method
    err.name;
    err.message;
    err.stack;
} finally {
    // expression is executed either it's error or not
}

try {
    // expression
} catch (err){
    // expression
    // method
    err.name;
    err.message;
    err.stack;
    if (err instanceof ErrorType){
        // expression
        // method
        err.name;
        err.message;
        err.stack;
    } else {
        // expression
        // method
        err.name;
        err.message;
        err.stack;
    }
}

try {
    // expression
} catch (err){
    // expression
    // method
    err.name;
    err.message;
    err.stack;
    if (err instanceof ErrorType){
        // expression
        // method
        err.name;
        err.message;
        err.stack;
    } else {
        // expression
        // method
        err.name;
        err.message;
        err.stack;
    }
} finally {
    // expression is executed either it's error or not
}

// throw error
throw new ErrorType("message");

// create new error type
class NewErrorType extends Error {
    constructor(message) {
        super(message);
        this.name = "NewErrorType";
    }
}

*/

// class MyCustomError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "MyError";
//     }
// }

// try {
//     throw new MyCustomError("This is an error");
// } catch (e) {
//     console.log(e.message);
// }

// try {
//     const arr = [1, 2, 3, 4];
//     for (let i = 0; i <= 4; i++) {
//         console.log(arr[i]); // js kalau dia out of bounds array nya jadi undefined
//     }
// } catch(e) {
//     console.log("Out of bounds");
// }
