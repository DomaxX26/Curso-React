
//Desestructuración
//Asignación Desestructurante

const persona = {
	nombre: 'Joan',
	edad: 21,
	clave: 'Ironman',
};

// const {nombre, edad, clave} = persona;

// console.log(nombre, edad, clave);

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// const retornaPersona = (usuario) =>{
// 	// console.log(usuario);
// 	const {nombre, edad, clave} = usuario;
// }

const useContext = ({nombre, edad, rango = 'Capitán', clave}) => {
	// console.log(nombre, edad, rango);

	return {
		nombreClave: clave,
		anios: edad,
		latlng:{
			lat:14.1232,
			lng: -12.3232
		}
	}
}



// const avenger = useContext(persona);
//latlng saca un objeto. latlng:{lat, lng} saca los elementos del objetos como dos elementos separados.
const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);