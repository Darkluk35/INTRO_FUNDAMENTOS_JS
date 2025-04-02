/*
    Objeto literal: Es un tipo de dato que nos permite guardar
    mas de una valor dentro de una variable y acceder a los valores a traves
    de llaves

    [let / const] <nombreVariable> = {
        <nombrePropiedad1>: <valor1>,
        <nombrePropiedad2>: <valor2>,
        ..........
        <nombrePropiedadN>: <valorN>
    }
        <valor> puede ser cualquier tipo de dato(String, Number, Boolean, otros obejtos)
*/

let mascota1 = {
    nombre: "Toby",
    tipo: "Perro",
    edad: 5,
    colorDePelaje: "Marron",
    estaEsterilizado: true,
    humano:{//Objeto anidado
        nombre: "Juan",
        edad: 30,
        telefono: 1234567890,
    }
}

//Operaciones de lectura
console.log(mascota1.nombre); //Toby, accediendo a la propiedad nombre
console.log(mascota1["tipo"]); //Perro, accediendo a la propiedad tipo (otra manera de acceder a las propiedades)

console.log(mascota1.humano.nombre); //Juan, accediendo a la propiedad nombre del objeto anidado humano

//Modificar datos (utilizar el operador de asignacion =)

console.log("La edad de la mascota: " + mascota1.nombre + " es: " + mascota1.edad + " años"); //La edad de la mascota es: Toby 5 años
//mascota1.edad = 6; //Modificando el valor de la propiedad edad
//mascota1.edad++; //Incrementando el valor de la propiedad edad
mascota1.edad += 1; //Incrementando el valor de la propiedad edad
console.log("La nueva edad de: " + mascota1.nombre + " es: " + mascota1.edad + " años"); //La nueva edad de: Toby es: 5 años

//Agregar propiedades al objeto
mascota1.colorDeOjos = "Verde"; //Agregando una nueva propiedad al objeto mascota1
console.log(mascota1.colorDeOjos); //Verde, accediendo a la propiedad colorDeOjos del objeto mascota1

/*
    Nosotros podemos crear una estructura predefinida de un objeto, esta estructura se crea a traves de
    algo conocido como Constructor.
    Una funcion Contructor es una funcion especial que nos permite definir la esctructura de un objeto y
    asociar valores a este.
    Cuando mandamos a llamar a un constructor debemos utilizar la palabra new.
    Esta palabra reservada le indica a JS que tiene que reservar memoria para guardar informacion.

    Atributos -> Son valores que nos permite definir una entidad. (Tambien conocidas como caracteristicas)

    Metodos -> Son las acciones que realiza una entidad. Estas acciones las vamos a representar con funciones.
    */

function humano(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
     console.log("Hola, mi nombre es " + this.nombre); //Definiendo un metodo dentro del objeto humano   
    }//Definiendo un metodo dentro del objeto humano
}

function Mascota(tipo,nombre,  edad, colorDePelaje, estaEsterilizado, humano) {
     this.nombre = nombre;
     this.tipo = tipo;
     this.edad = edad;
     this.colorDePelaje = colorDePelaje;
     this.estaEsterilizado = estaEsterilizado;
     this.humano = humano;
}

let humanoNuevo = new humano("Luis", 30); //Se esta creando un nuevo objeto
console.log(humanoNuevo.nombre); 
console.log(humanoNuevo.edad);
humanoNuevo.edad = 31; //Modificando el valor de la propiedad edad del objeto humanoNuevo
console.log(humanoNuevo.edad); //31, accediendo a la propiedad edad del objeto humanoNuevo

humanoNuevo.saludar(); //Hola, mi nombre es Luis, accediendo al metodo saludar del objeto humanoNuevo

let humanaNueva = new humano("Maria", 25); //Se esta creando un nuevo objeto
humanaNueva.saludar();



let mascotaNueva = new Mascota("Gato","Mandarino",3,"Cafe",true,humanoNuevo); //Se esta creando un nuevo objeto
console.log(mascotaNueva.nombre + " tiene " +mascotaNueva.edad + " años y su humano se llama " + mascotaNueva.humano.nombre ); //Gato tiene 3 años, accediendo a la propiedad nombre y edad del objeto mascotaNueva

console.table(mascotaNueva); //Mostrando el objeto mascotaNueva en forma de tabla

//Destructuracion de objetos -> Nos permite crear varialbes con los valores de un objeto o un arreglo
/*
let nombre = humanoNuevo.nombre;
let edad = humanoNuevo.edad;
*/

let {nombre, edad} = humanoNuevo; //Destructurando el objeto humanoNuevo
//Las variables a destructura SI O SI tienen quue tener el mismo nombre
//de las propiedades del objeto que se va a destructurar

console.log(nombre); //Luis, accediendo a la propiedad nombre del objeto humanoNuevo
console.log(edad); //31, accediendo a la propiedad edad del objeto humanoNuevo

// Bucle -> For o While
/*
    for(let i = 0; i < n; i++){

    }

    for... in
    Nos permite iterar sobre las llaves de un objeto literal.
    for([let | const] <nombreDeVariableInterna> in <objeto>){

    }

    for... of
    Este bucle nos permite iterar sobre los valores de un iterable.
    Los objetos NO son iterables.
     0           4
    [1, 2, 3, 4, 5]

     0        9
    "Hola mundo"
*/

console.log("for in");
for(let k in humanoNuevo){
    console.log(k);
    // console.log(humanoNuevo.k) Esta notación no nos serviría porque tratarías de acceder a la propiedad k la cuál no existe.
    console.log(humanoNuevo[k]);
}

for(let i in "Hola mundo"){
    console.log(i);
}

for(let i in [10, 9, 8, 10, 14]){
    console.log(i);
}

console.log("for of");


for(let c of "Hola mundo"){
    console.log(c);
}

for(let v of [10, 9, 8, 10, 14]){
    console.log(v);
}