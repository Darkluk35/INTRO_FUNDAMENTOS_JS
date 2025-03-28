/*
Una funcion es un bloque de codigo que tiene un nombre para que pueda
ser llamado a partir de ese nombre.

    funtion <Nombre de la funcion>(){
        //Codigo
    }

    El codigo asociado a una funcion se ejecuta cuando la funcion es llamada.
*/

function saludo(){
    console.log("Hola, soy una funcion");
}

saludo(); //Mandar a llamar una funcion.

/*
    Las funciones pueden recibir entradas conocidas como parametros.

    function <NombreFuncion>(parametros){
    //Codigo a ejecutar.
    }

    Los parametros pueden cualquier tipo de dato asociado:
    -Cadenas
    -Numeros
    -Booleanos
    -null
    -undefined
    -arreglos
    -funcion
    -Objetos literales
*/


function saludarPersona(nombrePersona){
    console.log("!Hola " + nombrePersona + " yo soy una funcion!");
}

saludarPersona("Araceli");
saludarPersona("Luis");

let nombre1 = "Juan";
saludarPersona(nombre1);

/*
    Una funciona puede regresar un valor. El termino "regresar" significa calcular una salida.

    function <NombreFuncion>(parametro1, parametro2){
        return <valorARetornar>;
    }

    Importante: Una vez que se ejecuta el return de una funcion, la funcion
    se detiene y no se ejecuta mas codigo.

    Una funcion puede regresar cualquier tipo de dato de JS

    Nota: Podemos tener una funcion sin un return, lo que significa que no
    regresa ningun valor de salida.

    Si la funcion no tiene un return, JS regresa undefined por default.
*/

function sumarNumeros(a,b){
    return a+b; //Es el valor que regresa una funcion.
}

console.log(sumarNumeros(5,5));

let resultadoSuma = sumarNumeros(7,7);
console.log(resultadoSuma);

console.log(sumarNumeros(resultadoSuma,10));

function sumarValoresArray(arreglo){
    if(arreglo.length >1){
        return arreglo[0] + arreglo[1];
    }
    else if(arreglo.length == 1){
        return arreglo[0];
    }
    else{
        return 0;
    }
    console.log("FIN, Esto no se ejecuta"); //Este codigo no se ejecuta porque ya se regreso un valor con return.
    return undefined; //JS lo regresa por default si no exissite un return.
}

let pares1 = [2,4,6,8];
console.log(sumarValoresArray(pares1));

let pares2 = [8];
console.log(sumarValoresArray(pares2)); //NaN -> NotANumber -> El valor no es un numero.

let pares3 = [];
console.log(sumarValoresArray(pares3));

/*
    Funciones anidadas: Es posible declarar una funcion dentro de otra funcion.
*/

function sumarRestarMultiplicar(a,b){
    function sumar(){
        return a+b;
    }

    function restar(){
        return b-a;
    }

    function multiplicar(){
        return a*b;
    }
    //  9+2         +    2-9     +    9*2
    //return sumar() + restar() + multiplicar();
    return "Suma: " + sumar() + " Resta: " + restar() + " Multiplicacion: " + multiplicar();

}

console.log(sumarRestarMultiplicar(9,2));

/*
    Scope: (Alcance): Nos permite sabes hasta donde podemos utilizar una variable o una funcion.
*/

let nombreTigre = "Tigrillo"; //Esta variable esta en el Alcance Global.
//Una variable global se puede utilizar en cualquier parte del codigo.

function a(){
    //Bloque de codigo
    let nombrePerro = "Firulais"; //Esta variable esta en el alcance de la funcion a.
    console.log("Variable global dentro de un bloque de codigo de una funcion: " + nombreTigre);
    console.log("Variable global dentro de un bloque de codigo de una funcion: " + nombrePerro);
}

a();
//console.log(nombrePerro); //No se puede acceder a la variable nombrePerro porque esta en un alcance diferente a menos que sean globales

if(true){
    //Bloque de codigo
    console.log("Variable global dentro de un bloque de codigo de un if: " + nombreTigre);
}

for(let i=0; i<2; i++){
    //Bloque de codigo
    let nombrePerro = "Mocka"; //Esta variable esta en el alcance del for.
    console.log("Variable global dentro de un bloque de codigo de un for: " + nombreTigre);
    console.log("Variable global dentro de un bloque de codigo de un for: " + nombrePerro);
    if(true){
        //Bloque de codigo
        console.log("Variable global dentro de un bloque de codigo de un if dentro de un for: " + nombreTigre);
        console.log("Variable global dentro de un bloque de codigo de un if dentro de un for: " + nombrePerro);
        nombrePerro = "El Firulais"; //Modificando la variable de un bloque de codigo padre
    }
    console.log(nombrePerro);
    nombreTigre = "Mandarino"; //Modificando la variable de un bloque de codigo padre
}

console.log(nombreTigre);

let i = 0;
while(i<2){
    //Bloque de codigo
    console.log("Variable global dentro de un bloque de codigo de un while: " + nombreTigre);
    i++;
    
}


function crearGato(nuevoNombreGato){
    let nombreTigre = nuevoNombreGato; //Si declaro una nueva variable con el mismo nombre de una variable global, la variable global no se modifica.
    console.log("Dentro de la funcion antes del if " + nombreTigre);
    if(true){
        let nombreTigre = "Firulais";
        console.log("Dentro de la funcion " + nombreTigre);
    }

    console.log("Despues de la funcion despues del if " + nombreTigre);
}

crearGato("Michi");
console.log("Fuera de la funcion " + nombreTigre);


//Tipos de datos II

/*
    -null
    -undefined

*/

let persona = null; //JS va a reservar espacio en memoria para guardar ahi un valor.
let persona2 = undefined; //JS no va a reservar espacio en memoria para guardar ahi un valor.