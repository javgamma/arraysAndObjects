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

let classmatesNames = ["Adriana","Andrea","Gabriela","Javmir","JesusAleman", "JesusRaad","Roger"]
console.log(classmatesNames.includes("Javmir"));
console.log(classmatesNames.indexOf("Javmir"));
console.log(classmatesNames[3]);

/**
 * 4.- Crea el siguiente array: const names = ["Carlos", "María", "Isidro", "Elizondo", "Molina"]. A continuación, muestra por consola los nombres ["María, Isidro"] usando slice(). Luego, sustituye "Elizondo" por "Parma" usando splice() y muestra el resultados por consola.
 */

const names = ["Carlos", "María", "Isidro", "Elizondo", "Molina"];

console.log(names.slice(1,3)); 

//Usando el metodo splice()

names.splice(3, 1, "Parma");
console.log(names);

// Convierte el array anterior (names) en un string 
//de nombres separados por espacios

console.log(names.join(" "));

/* 6.- Crea la variable const sentence = "El perro de San Roque no tiene rabo". A continuación, conviértela en un array de palabras, y, luego, en otro de letras. */

const sentence = "El perro de San Roque no tiene rabo"

//Array de palabras

const wordSentence = sentence.split(" ");

console.log(wordSentence);

//Array de letras

const sentenceLetters = sentence.split("");

console.log(sentenceLetters);


/*
7.- Diseña un programa (función) que vaya leyendo números y 
guardándolos en un array. Una vez lleno mostrará el array y 
deberá decir cuantos números son pares y cuantos son impares.
 La entrada de datos termina cuando el usuario teclea 0 o un valor no numérico. 
 ( permite detectar valores no numéricos).
*/


let numbersList = [];
let numbersByUser;
let i=0;
let even=0;
let odd=0;


function evenOrOddNumbers() {
  
  do {
    numbersByUser = parseInt(prompt("Introduce varios numeros, si quieres dejar de introducir numero presiona una letra o 0"))
    
    
    if (numbersByUser !==0 && !isNaN(numbersByUser)){
      numbersList [i]= numbersByUser
      i++;
    }
    //alert (`Tus numeros han sido ${numbersList}`)
    
  } while (numbersByUser !== 0 && !isNaN(numbersByUser));
  
  for (let i = 0; i < numbersList.length; i++) {
    if (numbersList[i]%2 ===0)
    {
      even++;
    }else{
      odd++;
    }
  }
  return console.log(`Tus numeros son estos: ${numbersList}
   de los cuales hay pares: ${even} e impares hay ${odd}`);
  
}

evenOrOddNumbers();
  