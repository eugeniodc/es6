const persona = ['Carlos Arturo', 23, 'Mexico'];

const [nombre, edad, pais, profesion='No especficado']=persona;

// console.log(persona[3]);

// console.log(profesion);


const mostrarInfo = ([nombre,,pais, profesion='no especificado'] ) =>  console.log(nombre,profesion);

mostrarInfo(persona);