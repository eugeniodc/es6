
const mostrarDatos = (...datos) => { // Utiliza parametros rest para convertirlo en un array
    console.log(datos);
}
const mostrarDatos2 = (nombre, edad, correo) => { 
    console.log(nombre);
}


const arregloDatos = ['Carlos', 23, 'correo@corre.es'];
mostrarDatos(...arregloDatos);  // Pasa los argumentos de forma independiente
mostrarDatos2(...arregloDatos);