function agregar_tarea() {
    // Accediendo al elemento input.
    let agreagarTareaInput = document.getElementById("AgregarTareaInput");
    
    if (agreagarTareaInput.value === "") {
        alert("El campo de tarea está vacío. Por favor agrega una tarea");
         //alert("El campo de tarea está vacío. Por favor agrega una tarea");
         document.getElementById("mensajesAplicacion").innerText = "El campo de tarea está vacío. Por favor agrega una tarea"
         return;
    }
    
    //Accediendo a la lista <ul>
    let listaTareaUl = document.getElementById("listaTareaUl");
    //Creando un nuevo elemento.
    let nuevoLi = document.createElement("li");
    nuevoLi.innerText = agreagarTareaInput.value; //El atributo value me permite acceder a lo que esta
// escrito en el input

    //Una vez creado el nuevo elemento, se debe agregar a otro elemento
    listaTareaUl.appendChild(nuevoLi)
    //Una vez creado 

    agreagarTareaInput.value = ""; //Limpiando el input para que quede vacio una vez que se agrega la tarea
    document.getElementById("mensajesAplicacion").innerText = "";

    //para eliminar un elemento podemos utilizar removeChild aplicado al papa de ese elemento
    let mensaje_error = document.getElementById("mensaje_error");
    document.body.removeChild(mensaje_error);
    //document.body  Eliminando el mensaje de error desde el body, atajo para acceder al body padre
    
}


let agregarTareabtn = document.getElementById("agregar_tarea_btn"); //Buscando un elemento por su id
//agregarTareabtn.onclick = agregar_tarea; //Modificando la propiedad de un elemento para agregarle una funcion

/*
    El metodo addEventListener le ensenia a un elemento a escuchar.
    El metodo recibe 2 parametros:
    -El evento a escuchar. El evento es un string.
    -La funcion a ejecutar al escuchar el evento.

*/
agregarTareabtn.addEventListener("click",agregar_tarea);


//NOTA: Cuando trabajamos con addEventListener, los eventos NO deben llevar la palabra "on" al inicio.


