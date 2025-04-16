// tipos-de-dato.js

console.log(typeof 42);           // number
console.log(typeof 'Veinticinco'); // string
console.log(typeof -666);         // number
console.log(typeof true);         // boolean
console.log(typeof 0);            // number
console.log(typeof '');           // string
console.log(typeof null);         // object (curioso, ¿verdad?)
console.log(typeof undefined);    // undefined
console.log(typeof false);        // boolean

// Ejemplos adicionales
console.log(typeof []);           // object (pero es un array)
console.log(typeof {});           // object
console.log(typeof NaN);          // number (aunque sea "Not a Number")
console.log(typeof function(){}); // function
console.log(typeof Symbol("id")); // symbol
