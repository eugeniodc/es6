const mensajeAlerta = (mensaje) => {
    alert(mensaje);
    saludo();
}

const saludo = () => {
    console.log('Saludo!');
}

export {mensajeAlerta}; 

// export {funciones, clases};