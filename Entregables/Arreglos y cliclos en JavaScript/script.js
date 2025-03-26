//Ejercicio de la clase 3 de la semana 2
//Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.

let citricos = 0;
let pomaceas = 0;
let bayas = 0;
let drupas = 0;
let tropicales = 0;
let cucurbitaceas = 0;

let frutasConTipo = [
    { nombre: "Naranja", tipo: "Cítrico" },
    { nombre: "Manzana", tipo: "Pomácea" },
    { nombre: "Plátano", tipo: "Tropical" },
    { nombre: "Uva", tipo: "Baya" },
    { nombre: "Fresa", tipo: "Baya" },
    { nombre: "Piña", tipo: "Tropical" },
    { nombre: "Mango", tipo: "Tropical" },
    { nombre: "Cereza", tipo: "Drupa" },
    { nombre: "Pera", tipo: "Pomácea" },
    { nombre: "Sandía", tipo: "Cucurbitácea" },
    { nombre: "Melón", tipo: "Cucurbitácea" },
    { nombre: "Durazno", tipo: "Drupa" },
    { nombre: "Coco", tipo: "Drupa" },
    { nombre: "Kiwi", tipo: "Baya" },
    { nombre: "Limón", tipo: "Cítrico" }
];

console.log(frutasConTipo.length);
for (let i = 0; i < frutasConTipo.length; i++){
    if (frutasConTipo[i].tipo == "Cítrico"){
        citricos++;
    }else if (frutasConTipo[i].tipo == "Pomácea"){
        pomaceas++;
    }else if (frutasConTipo[i].tipo == "Baya"){
        bayas++;
    }else if (frutasConTipo[i].tipo == "Drupa"){
        drupas++;
    }else if (frutasConTipo[i].tipo == "Tropical"){
        tropicales++;
    }else if (frutasConTipo[i].tipo == "Cucurbitácea"){
        cucurbitaceas++;
    }
}

console.log("Existen " + citricos + " frutas citricas");
console.log("Existen " + pomaceas + " frutas pomaceas");
console.log("Existen " + bayas + " frutas bayas");
console.log("Existen " + drupas + " frutas drupas");
console.log("Existen " + tropicales + " frutas tropicales");
console.log("Existen " + cucurbitaceas + " frutas cucurbitaceas");