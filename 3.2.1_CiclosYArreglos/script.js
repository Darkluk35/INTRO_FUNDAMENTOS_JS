let contador = 1;

//while estructura de control que nos permite repetir una serie de instrucciones
/*
while (condicion){
}

Nota: La condicion SIEMPRE se ejecuta primero

Generalmente utilizamos el while cuando no sabemos cuantas veces se va a repetir el codigo

*/
console.log("Ejecucion de un cliclo while");
while (contador <=10) {
    console.log(contador)
    contador++
}
//contador = 10;

//do-while --> Es una estructura muy parecida al while, sin embargo,
//aqui el codigo se ejecuta siempre al menos una vez
/*
do{
    //codigo a ejecutar.
}
while(condicion);
*/
console.log("Ejecucion de un cliclo do-while");
do{
    console.log("Soy el codigo de un do-while");
}while(contador < 10);

/*
Sera posible inicializar mas de una variable y modificar mas de una variable
en la acumulacion del ciclo for?

Generalmente utilizamos el for cuando sabemos cuantas veces se va a repetir el codigo
for (inicializacion; condicion; incremento){
    //codigo a ejecutar
}
*/
console.log("Ejecucion de un cliclo for");
for (let i = 0; i <= 20; i+=2){
    console.log(i);
}


//let alumnosTona = []; //Arreglo vacio
//let alumnosTona = Array(); //Arreglo vacio
//let alumnosTona = Array(5); //Arreglo con 5 pociociones. Estas pocisiones no son finales
let alumnosTona = ["Abril","Alexis","Luis","Jeshua","Jaqueline","Victor"];
console.log(typeof alumnosTona); //Typeof nos dice que tipo de dato es la variable
console.log(alumnosTona);

//Indice de un arreglo --> Es la posicion de un valor.
/*
    El indice empieza a contarse desde 0.
        0       1        2       3         4          5
    ["Abril","Alexis","Luis","Jeshua","Jaqueline","Victor"]
*/

console.log(alumnosTona[1]); //Lectura de un valor de un arreglo.
alumnosTona[1] = "Mendez";  //Modificando un valor del arreglo.
console.log(alumnosTona[1]); 

// console.log(alumnosTona[-1]); No podemos utilizar un valor negativo como indice.
//En JS  un arreglo puede tener diferentes tipos de datos.
//No esta restringido aque todos los datos de este sean del mismo tipo.
let arregloTutifruti = ["Soy una cadena", 1.5 , 2, "soy otra cadena",null,undefined, [1,2,3,[1,2,3]], "Una cadena"];

let frutas = [];
frutas.push("Naranja"); //Agrega elementos al final del arreglo.
console.log(frutas);
frutas.push("Manzana");
console.log(frutas);

frutas.unshift("Uva"); //Agregar elementos al inicio del arreglo.
console.log(frutas);

frutas.push ("Zanahoria");
frutas.unshift("Cebolla");
console.log(frutas);
frutas.pop(); //Elimina el ultimo elemento del arreglo.
console.log(frutas);
frutas.shift(); //Elimina el primer elemento del arreglo.
console.log(frutas);

//Como acceder a mas de un elemto de un arreglo?

//Como eliminar un elemento que no este al inicio o al final del arreglo?

frutas.splice(1,1,"Fresa","Mango"); //Nos permite eliminar y agregar nuevos valores.
console.log(frutas);
//   0       1         2          3
//['Uva', 'Fresa', 'Mango', 'Manzana']
console.log(frutas.slice(1,3)); //Nos permite obtener un subarreglo

let numerosAzar = [1,2,4,5,6,8,19,14,18,35,43,57,59,66,64,68,71,73,75,78];
numerosAzar.length; //Nos permite obtener la longitud de un arreglo.

//Para cada valor del arreglo, mostrar un mensaje indicando si el numero es par o impar
// % -> El modulo nos permitira saber si el valor es par o impar

let pares = [];
let impares = [];

for (let i = 0; i < numerosAzar.length; i++){
    if (numerosAzar[i] % 2 == 0){
        console.log('El numero ' + numerosAzar[i] + ' es par');
        pares.push(numerosAzar[i]);
    }else{
        console.log('El numero ' + numerosAzar[i] + ' es impar');
        impares.push(numerosAzar[i]);
    }
}

console.log("Los numeros pares son: " + pares);
console.log("Los numeros impares son: " + impares);