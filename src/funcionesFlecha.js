const nombres = ['carlos', 'jesus', 'alejandro'];

/* const numero_caracteres = nombres.map(function (nombre) {
    console.log(`${nombre} tiene ${nombre.length} letras`)
});
 */

/* const numero_caracteres = nombres.map( (nombre) => {
    return `${nombre} tiene ${nombre.length} letras`;
});
 */
// En una sola linea podemos eliminar el return en las funciones tipo fecha
/* const numero_caracteres = nombres.map( (nombre) => `${nombre} tiene ${nombre.length} letras`);
 */

// Con un sólo parametro puedes quitar los parentesis 
const numero_caracteres = nombres.map( nombre => `${nombre} tiene ${nombre.length} letras`);


console.log(numero_caracteres);


/* (parametro) => {
     //codigo a ejecutar
     return
} */