/* 
1.- Crea una variable que tenga como valor un array vacío. */

let countries = [];


/*
2.- Crea una variable que tenga como valor un array con al menos 3 tipos de datos distintos.  */

let student = ["Maria", 33, true];

/*
3.1.- Crea un array vacío y añádele dos valores usando push(), dos valores usando unshift() y luego usa pop() y shift() una vez. A continuación, muestra por consola la longitud del array. */

let cities = [];

cities.push("Madrid", "Valencia");

console.log(cities)

cities.unshift("Vigo", "Cantabria");

console.log(cities)

cities.pop();

console.log(cities)

cities.shift();
console.log(cities)

console.log(cities.length);

/*
3.2.- Crea un array classNames con todos los nombres de tus compañer@s de clase. Muestra por consola tu nombre seleccionando el que hay en el array classNames.
*/