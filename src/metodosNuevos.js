const texto= "Hola Mundo";

console.log(texto, 'empieza con h:', texto.toLocaleLowerCase().startsWith('h'));

console.log(texto, 'termina con o:', texto.endsWith('o'));

console.log(texto, 'incluye la palabra mundo', texto.toLocaleLowerCase().includes('mundo'));

const amigos = ['Eugenio','José', 'Alejandro','Manuel'];

console.log(amigos.includes('Manuel'));

/*
console.log(amigos.find((amigo) => 
    {
        return amigo.length>6;
}
  ));

*/

//Acortando la función flecha
console.log(amigos.find( amigo => amigo.length < 5 ));

console.log(amigos.findIndex( amigo => amigo=='Manuel'));