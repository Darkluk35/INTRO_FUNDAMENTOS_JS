let now = new Date();

function agregar_comentario() {
    const timestamp = new Date().toLocaleString();
    // Accediendo al elemento input.
    let agregarComentario_In = document.getElementById("AgregarComentarioInput");
    
    //Accediendo a la lista <ul>
    let listaComentarioUl = document.getElementById("listaComentariosUl");
    //Creando un nuevo elemento.
    let nuevoLi = document.createElement("li");
    nuevoLi.innerText = `${agregarComentario_In.value}  (${timestamp})`; //Se agrega la fecha y hora actual al comentario.

    //Una vez creado el nuevo elemento, se debe agregar a otro elemento
    listaComentarioUl.appendChild(nuevoLi)
    //Una vez creado 

}
let agregarTareabtn = document.getElementById("AgregarComentarioBtn");

AgregarComentarioBtn.addEventListener("click",agregar_comentario);