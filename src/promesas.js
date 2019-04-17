const promesa = new Promise((resolve, reject) => {
    // Accion que queremos que se ejecute cuando el Ajax 
    // resolve();
    //reject();
    setTimeout(() => {
        const exito = false;
        if (exito) {
            resolve('la operacion tuvo exito');
        }
        else {
            reject('fracaso');
        }
    }, 4000);



});

promesa.then((mensaje) => { alert(mensaje); }
);

promesa.catch(
    (mensaje) => {
        alert(mensaje);
    }
);

