/*const mostrarDatos = (nombre, edad,correo) => {;
 console.log(nombre,edad, correo);   
}*/

const mostrarDatos = (...datos) => {
    console.log(datos);   
   }
   
mostrarDatos('Carlos',23,'carlos@corre.com')