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

//Pi = 12; //No se puede reasignar un valor a una constante

//Boolean (Boleano): Nos pernite representar valores entre verdadero o falso (True o False),(1 o 0)
let mayorEdad = true;
let TerceraEdad = false;

//Palabra reserveda: Es una palabra especial en el lenguaje de programacion que NO puede usarse como
//nombre de variables, funciones, clases.

//alert(mensajeFinal);
//let nombremascota = prompt("Ingresa tu nombre de tu mascota");
//alert("El nombre de tu mascota es: " + nombremascota);

//Leer los datos de una mascota e imprimir un mensaje que incluya todos los datos leidos.
//Utilizar al menos 1 vez cada tipo de datos (String, Number, Bolean)

/*let nombreMascota = prompt("Ingresa el nombre de tu mascota");
const edadMascota = prompt("Ingresa la edad de tu mascota");
let vacunas = confirm("Tu mascota tiene vacunas?");
alert("El nombre de tu mascota es: " + nombreMascota + " tiene " + edadMascota + " años");
console.log("Es " + vacunas + " que tiene vacunas");
*/

//Crear un cuestionario de 10 preguntas. Mostrar cada pregunta una por una y al final mostrar
//la respectiva pregunta con la respuesta ingresada por el usuario.
//Que al menos 2 preguntas sean de opcion multiple.
//Que al menos 2 preguntas sean respuestas de valores numericos.
//Cada pregunta debe tener la respuesta en los comentarios del codigo.
//Agregar cada respuesta correcta a una variable.


//Comentarios JS: Son lineas de texto que se ignoran al momento de ejecutar el programa.
//Comentarios de una sola linea: Se crean con // al inicio de la linea.
//Comentarios de multiples lineas: Se crean con /* al inicio y con */ al final.


let res1 = prompt("¿En qué año se lanzó Call of Duty: Modern Warfare 2?"); 
// Respuesta correcta: 2009

let res2 = prompt("¿Cuál es el nombre del creador de Minecraft?"); 
// Respuesta correcta: Notch

let res3 = prompt("¿Cuál es el objetivo principal en Among Us?"); 
// Respuesta correcta: Encontrar al impostor

let res4 = prompt("¿En qué año se lanzó Fortnite?"); 
// Respuesta correcta: 2017

let res5 = prompt("¿Cuál de estos juegos pertenece a la saga The Legend of Zelda? (A) Elden Ring (B) Breath of the Wild (C) Hollow Knight"); 
// Respuesta correcta: B

let res6 = prompt("¿Cuál es el personaje principal de la saga Halo? (A) Marcus Fenix (B) Kratos (C) Jefe Maestro"); 
// Respuesta correcta: C

let res7 = prompt("¿Cuántos jugadores pueden estar en una partida de Battle Royale en Fortnite?"); 
// Respuesta correcta: 100

let res8 = prompt("¿Cómo se llama la empresa creadora de League of Legends?"); 
// Respuesta correcta: Riot Games

let res9 = prompt("¿Qué significa 'GG' en el lenguaje de los videojuegos?"); 
// Respuesta correcta: Good Game

let res10 = prompt("¿Qué color tiene el logo principal de PlayStation?"); 
// Respuesta correcta: Azul

alert("Tus respuestas fueron:\n" +
    "1. " + res1 + "\n" +
    "2. " + res2 + "\n" +
    "3. " + res3 + "\n" +
    "4. " + res4 + "\n" +
    "5. " + res5 + "\n" +
    "6. " + res6 + "\n" +
    "7. " + res7 + "\n" +
    "8. " + res8 + "\n" +
    "9. " + res9 + "\n" +
    "10. " + res10);
