console.log('Hello World!');
//String (Cadenas): Nos permite representar texto
//Para crearlas podermos usar comillas simples, dobles o backticks

//Variables: Es un espacio dentro de la computadora que nos permite guardar datos.
//Receta magica para crear una variable:
//Especificador de variable + nombre de la varaiable = valor 

/*
     Especificadores de variables: var, let, const
*/

let nombre = "Programador35"; //Declara una variable llamada nombre y se le asigna el valor "Programador35".

console.log(nombre);

nombre = "Lasercito3D"; //Reasignando el valor de la variable nombre
console.log(nombre);

//Number (Números): Nos permite representar números
let edad = 35; //Entero
let estatura = 1.8; //Decimal
let gradosC = -10; //Negativo

console.log(edad, estatura, gradosC);

let mensajeFinal = nombre + " tiene " + edad + " años";
console.log(mensajeFinal);
console.log(typeof mensajeFinal);


//const = constante

const Pi = 3.1416;
const IVA = 0.16;

Pi = 12; //No se puede reasignar un valor a una constante

//Boolean (Boleano): Nos pernite representar valores entre verdadero o falso (True o False),(1 o 0)
let mayorEdad = true;
let TerceraEdad = false;

//Palabra reserveda: Es una palabra especial en el lenguaje de programacion que NO puede usarse como
//nombre de variables, funciones, clases.