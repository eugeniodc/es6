const crearObjeto = (nombre, edad) => {
    return {
        nombre,  // nombre: nombre,
        edad,     // edad: edad
        mostrarInfo()
        {
            return `${nombre} tiene ${edad} años`;
        }
        /* mostrarInfo: () => {
            return `${nombre} tiene ${edad} años`;
        }*/
    }
}

console.log(crearObjeto('Carlos',23).mostrarInfo());
