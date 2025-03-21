//Estructura de control if(Si entonces.....).
/*
La estructura if nos permite tomar decisiones para ejecutar un pedazo de codigo.
if (Expresion logica){
    Codigo a ejecutar
}else{

}
En caso de que la expresion logica sea true, entonces el codigo se ejecutara
En caso de que la expresion logica sea false, entonces el codigo no se ejecutara

El codigo dentro de unas llaves{} se le conoce como "Bloque de codigo"

if(expresion logica){
codigo a ejecutar si expresion es true
}
else{

codigo a ejecutar si expresion es false}


if(expresion logica1){
codigo a ejecutar si expresion1 es true
}
else if(expresion logica2){
codigo a ejecutar si expresion1 es false y expresion2 es true
}else{
codigo a ejecutar si todas las expresiones son false
}
*/

let edad = 19;
let traeINE = true;
let peliculaDeseada = "Wolverine";

/*
Cuando comparamos booleanos, no es necesario utilizar el operador de igualdad
*/

if(edad >= 18 && traeINE){
    console.log("El usuario si puede entra al cine");
    console.log("Fin del if")
    if(peliculaDeseada == "Spiderman"){
        console.log("El usuario quiere ver Spiderman");
    }
    else if(peliculaDeseada == "Wolverine"){
        console.log("El usuario quiere ver Wolverine");
    }
    else if(peliculaDeseada == "Ironman"){
        console.log("El usuario quiere ver Ironman");
       
    }
    else{
        console.log("El usuario quiere ver otra pelicula");
    }
}

