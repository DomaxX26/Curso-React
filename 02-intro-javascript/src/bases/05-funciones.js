

//Funciones en JS

const saludar = function (nombre){
	return `Hola, ${nombre}`
}

const saludar2 = (nombre) => {
	return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;
//saludar = 20;
// console.log(saludar('Joan'))

console.log(saludar('Joan'));
console.log(saludar2('Paco'));
console.log(saludar3('España'))
console.log(saludar4())

const getUser = () =>{
	return{
		uid: 'ABC123',
		username: 'El_Papi1502',
	};
}

const user = getUser();
console.log(user);


//Tarea
//1. Transformen a una función de Flecha
//2. Tiene que retornar un objeto implícito
//3. Pruebas
function getUsuarioActivo(nombre){
	return{
		uid: 'ABC567',
		username: nombre
	}
};

const usuarioActivo = getUsuarioActivo('Joan');
//console.log(usuarioActivo);

//Resuelto

const getUsuarioActivo2 = (nombre) => ({
	uid: 'ABC567',
	username: nombre
});

const usuarioActivo2 = getUsuarioActivo2('Joan');
console.log(usuarioActivo2);