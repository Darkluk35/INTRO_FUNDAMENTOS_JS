
//Operador de asignacion -> = -> Nos permite asignar un valor a una variable
let valorA = 5;
let valorB = 4;

valorA = 9;

//Operador de concatenacion -> + -> Nos permite crear una cadena a partit de 2 o mas expresiones donde al menos
//Una expresion puede ser: una variable, una cadena, una constante, una operacion matematica.

//Operadores matematicos
console.log(valorA + ' + ' + valorB + ' = ' + (valorA + valorB)); // Operador Suma
console.log(valorA + ' - ' + valorB + ' = ' + (valorA - valorB)); // Operador Resta
console.log(valorA + ' * ' + valorB + ' = ' + (valorA * valorB)); // Operador Multiplicacion
console.log(valorA + ' / ' + valorB + ' = ' + (valorA / valorB)); // Operador Division

//Operacion modulo -> % -> Nos permite obtener el residuo de una division
console.log('5 % 1 =' + (5%1) );
console.log('5 % 2 =' + (5%2) );
console.log('5 % 3 =' + (5%3) );
console.log('5 % 4 =' + (5%4) );
console.log('5 % 5 =' + (5%5) );

//Operadores combinados
let variable1 = 10;
console.log(variable1); //Imprime 10
variable1 += 5; //<- esto es igual a escribir variable1 = variable1 + 5
console.log(variable1); //Imprime
variable1 -= 5; //<- esto es igual a escribir variable1 = variable1 - 5
console.log(variable1); //Imprime
variable1 *= 5; //<- esto es igual a escribir variable1 = variable1 * 5
console.log(variable1); //Imprime


//Operador incremento
let variable2 = 0;
console.log(variable2); //Imprime 0
variable2 ++;
console.log(variable2); //Imprime 1
variable2 ++;
console.log(variable2);

//Operador decremento
let variable3 = 0;
console.log(variable3); //Imprime 0
variable3 --;
console.log(variable3); //Imprime 1
variable3 --;
console.log(variable3);

//Operadores de comparacion
console.log('5 == 5 -> ' +(5==5));
console.log("5 == '5' -> " +(5=='5')); //El Operador de igualdad (==)revisa unicamente el valor
console.log("5 === '5' -> " +(5==='5')); //Operador de igualdad estricto(===) revisa tanto el valor como el tipo de dato

console.log("18 != 17 -> " + (18 != 17)); // true
console.log("18 != '18' -> " + (18 != '18')); // false -> El número 18 es igual que la cadena '18'
console.log("18 !== '18' -> " + (18 !== '18')); // true -> El número 18 es estrictamente diferente que la cadena '18'.



let varialbeMayor = 24;
let variableMenor = -1;
console.log(varialbeMayor + " > " + variableMenor + " -> " + (varialbeMayor > variableMenor));
console.log(varialbeMayor + " < " + variableMenor + " -> " + (varialbeMayor < variableMenor));

let variableIgual = varialbeMayor;
console.log(varialbeMayor + " >= " + variableIgual + " -> " + (varialbeMayor >= variableIgual));
console.log(varialbeMayor + " <= " + variableIgual + " -> " + (varialbeMayor <= variableIgual));

//Operadores logicos
//And (y) -> &&
//true && true -> true
//true && false -> false
//false && true -> false
//false %% false -> false

let edad = 24;
let traeINE = true;
console.log("Edad >= 18 %% traeINE == true ->", (edad >= 18 && traeINE == true));
traeINE = false;
console.log("Edad >= 18 %% traeINE == true ->", (edad >= 18 && traeINE == true));


//Or (o) -> ||
//true || true -> true
//true || false -> true
//false || true -> true
//false || false -> false

let especieMascota = "perro";
console.log(especieMascota)
console.log("especieMascota == 'perro' || especieMascota == 'gato' -> ", (especieMascota == 'perro' || especieMascota == 'gato'));

especieMascota = "gato";
console.log(especieMascota)
console.log("especieMascota == 'perro' || especieMascota == 'gato' -> ", (especieMascota == 'perro' || especieMascota == 'gato'));

especieMascota = "pez";
console.log(especieMascota) 
console.log("especieMascota == 'perro' || especieMascota == 'gato' -> ", (especieMascota == 'perro' || especieMascota == 'gato'));

//Not (negacion) -> !
//!true -> false
//!false -> true

console.log("!true -> ", !true);
console.log("!false -> ", !false);

edad = 35;
console.log("!(edad >= 18) -> "  + (!(edad >= 18)));