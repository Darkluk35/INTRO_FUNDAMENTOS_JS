let nota = prompt("Cual es tu nota de este semestre?"); 
if(nota >= 90){
    console.log("Estas aprobado como excelente");
    console.log("La nota es: " + nota);
}
else if(nota >= 75 && nota < 90){
    console.log("Estas aprobado como bien");
    console.log("La nota es: " + nota);
}
else if(nota >= 60 && nota < 75){    
    console.log("Estas aprobado como Suficiente");
    console.log("La nota es: " + nota);
}
else{
    console.log("Estas reprobado");
    console.log("La nota es: " + nota);
}