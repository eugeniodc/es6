const usuario = {
    nombre: 'Carlos',
    correo: 'carlo@gmail.com',
    edad: 22,
    pais: 'Mexico'
}

const {nombre, pais}= usuario;

const mostrarInfo = ( {nombre, profesion='Estudiante'} ) => { console.log(`${nombre} es ${profesion}`);}

//console.log(usuario.profesion, pais);
mostrarInfo(usuario);

