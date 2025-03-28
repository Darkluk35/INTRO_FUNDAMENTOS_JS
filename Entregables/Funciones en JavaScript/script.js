let librosLeido = [];

function agregarLibro(titulo){
    librosLeido.push(titulo);
}

function mostrarLibros(titulo){
    console.log("Los libros leidos son: ");
    for (let i = 0; i < librosLeido.length; i++){
        console.log(librosLeido[i]);
    }
}

agregarLibro("El principito");
agregarLibro("El fantasma de canterville");
agregarLibro("El perfume");
agregarLibro("Sistemas de control moderno");
mostrarLibros();