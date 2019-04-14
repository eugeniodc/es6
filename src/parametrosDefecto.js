function registrarUsuario(nombre, pais = 'no especificado', correo, telefono = '000000') {
    return `Nombre: ${nombre}, Pais: ${pais}, Corre: ${correo}, Telefono: ${telefono}`;
}

console.log(registrarUsuario('Carlos', undefined, 'carlos@gmail.com', '131431'));
