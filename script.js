// no se utiliza por que var es mutable
// variable esta definida pero no esta inicializada
var a = 5; 
// permito cambio de valor (supongo que sea del mismo tipo)
let b = 5;
b=10;
// siempre hay que inicializar los constantes
const c = 5;
c=5;

// let admin, namee;
let namee = "John";
let admin = namee

let a = 50;
const isEven = a % 2 === 0;
if(isEven) {
    // es par
} else {
    // es impar
}

// Dos maneras de reescribir el if(...) de dos Opciones!
const age = 10
let isAdult;
if(age >= 18) {
    isAdult = true
} else {
    isAdult = false
}
// isAdult = condicion ? valorAfirmativo : valorNegativo
isAdult = age >= 18 ? true : false
// como ya devuelve un booleano puede ser mas corto
isAdult = age >= 18; // haria lo mismo que la de arriba
// pero si queremos mas que un booleano:
isAdult = age >= 18 ? 'es mayor de edad' : 'es menor'


// lo mismo de formas diferentes
for (let index = 1; index <= 10; index++) {
    if(index % 2 === 0) {
        console.log(index)
    }
}

let indexWhile = 1;
while(indexWhile <= 10) {
    if(indexWhile % 2 === 0) {
        console.log(indexWhile)
    }
    indexWhile++;
}

for (let index = 2; index <= 10; index+=2) {
    console.log(index)
}

//funcion flecha
// const sum = (a + b) => a + b;
// console.log(sum(5, 3))

// objetos
// crear objeto basio, 2 maneras
let user1 = new Object();
let user2 = {}

// crear objeto no basio 
let user = {
    namee: "John",
    age: 30,
};

user.namee //John
user.age // 30 

user["namee"]  // John
user["age"] // 30 

delete user.namee // eliminamos un objeto completo
user.age = null // borramos la propiedad pero llave age sigue existiendo
user.number = 345333333 // anadimos nueva propiedad

// recorer todas las propiedades de un objeto
const bigObject = {
    a: 1,
    b: 2,
    c: 3,
}

for (key in bigObject) {
    console.log(key, bigObject[key]) // a 1, b 2, c 3
}

// trabajamos con asincronismo 
// Promesas

// creamos una funccion que denntro tiene otra funccion. 
// est asegunda funcion es la que resibe dos parametros 
// resolve() y reject()
// productor
function obtenerCitasDisponibles() {
    //creamos una promesa para jestionar asincronizacion
    const promise = new Promise((relove, reject) => { 
        // lo que tenemos dentro de la promesa es lo que jestiona el servidor !!!!
        setTimeout(() => {
        // solo habra una opcion aqui en caso real
        
        // Existe un servidor por alli,
        // que nos va adecir las citas disponible
        const citas = ['12:00', '12:30', '13:00']
        resolve(citas)

        // suponemos que no hay citas disponibles
        reject();

        }, 1500 )// no sabemos este tiempo en vida real
    }) 
    return promise;
}

// consumidor
// llamamos la funcion cunado esta resulata 
// (puede ser: fulfilled / rejected)
obtenerCitasDisponibles()
.then((citasDisponibles) => {
    console.log('las citas disponibles son:  ')
})
.catch(() => {
    console.log('no hay citas disponibles en esta fecha')
})

// otra manera de gestionar la Promesa 
// Async / await
// hace que el codigo espera a que se ejecuta la promesa
await obtenerCitasDisponibles();

// reescribimos la respuesta con wait:
try {
    const citasDisponibles = await obtenerCitasDisponibles ();
    console.log('las citas disponibles son:  ')
} catch (error) {
    console.log('no hay citas disponibles en esta fecha')
}