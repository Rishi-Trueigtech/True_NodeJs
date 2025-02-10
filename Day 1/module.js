//Modules

// Modules in Node.js are like JavaScript libraries — a set of related functions that you can include in your application. 
// Every Node.js file can be considered a module that can export code for reuse in other parts of the application. 
// This modular approach allows developers to separate concerns, reuse code, and maintain a clean architecture.

exports.add = function (x, y) {
    return x + y;
};

exports.sub = function (x, y) {
    return x - y;
};

exports.mult = function (x, y) {
    return x * y;
};

exports.div = function (x, y) {
    return x / y;
};