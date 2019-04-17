import { mensajeAlerta } from "./modulos/mensajeAlerta";

// Cuando no tiene llaves hacemos un export default podemos cambiarle el nombre de la clase
import Clase from "./modulos/clasePersona";


// mensajeAlerta('Hola mundo');

const eugenio = new Clase('Eugenio',47);

eugenio.mostrarInfo();
