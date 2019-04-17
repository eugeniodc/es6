class Usuario {
    constructor(nombre, edad, correo) {
        this.nombre= nombre;
        this.edad= edad;
        this.correo=correo;
    }

    mostrarSaludo() {
        return `
            <b>Nombre:</b> ${this.nombre} <br />
            <b>Edad:</b> ${this.edad} <br />
            <b>Correo:</b> ${this.correo} <br />            
            <hr />
        `;

    }
}

class Estudiante extends Usuario {
    constructor (nombre,edad,correo,carrera){
        super(nombre,edad,correo);
        this.carrera=carrera;
    }
    mostrarSaludo() {
        return `
            <b>Nombre:</b> ${this.nombre} <br />
            <b>Edad:</b> ${this.edad} <br />
            <b>Correo:</b> ${this.correo} <br />            
            <b>Carrera:</b> ${this.carrera} <br />            
            <hr />
        `;
    }

} 

const carlos = new Usuario('Carlos Arturo', 23, "carlo@gmail.com");

document.write(carlos.mostrarSaludo());

const alejandro = new Estudiante('Alejandro', 38, "alejandro@gmail.com", "desarrollador");
document.write(alejandro.mostrarSaludo());