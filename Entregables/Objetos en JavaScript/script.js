/*
Proyecto Objetos en JavaScript
En este proyecto, practicarás los conceptos básicos de objetos con JS que has visto hasta este momento.

Objetivo
El objetivo es agregar un archivo a tu repositorio y que contenga la solución al problema planteado a continuación.

Problema: Crear objeto a partir de un Libro
Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.

Instrucciones para resolver el problema:
Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, 
que puede ser 'disponible' o 'prestado'.
También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.
*/

function Libro(titulo, autor, anio, estado) {  //Entidad
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.estado = estado;
    this.capitulos = capitulos = [];
    this.informacion = function(){
    console.log("El nombre del libro es: " + this.titulo + ", su autor: " +this.autor + ", el anio de publicacion: " + this.anio + ", y se encuentra: " + this.estado, capitulos); //Definiendo un metodo dentro del objeto humano
    this.agregarCapitulos = function (capitulo){
        this.capitulos.push(capitulo);
    }

}   
}

let NewLibro = new Libro("El perfume","Patrick Süskind",1985, "Prestado");  //Nuevo objeto literal
NewLibro.informacion();
NewLibro.agregarCapitulos("Capitulo 1");
NewLibro.informacion();
