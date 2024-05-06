//Crea un objeto llamado citizen1 y dale las propiedades
//name, lastname y age. Elige tú los valores.

const citizen1 = {
    name: "javmir",
    lastname: "hernandez",
    age: 33
}

/*2.- Una vez creado, añádele la propiedad city, 
con el valor que tú quieras, 
y cambia el valor de la propiedad age. 
Comprueba que los cambios han surtido efecto. */

citizen1.cityname = "madrid";

citizen1.age = 16;


console.log(citizen1.name);
console.log(citizen1.age);
console.log(citizen1);

// 3.- Crea una función checkCitizenship que 
// acepte como parámetro un objeto, 
//compruebe la edad del ciudadano y, si ésta es mayor de 18, 
// añada la propiedad canVote: true; de lo contrario, debe añadir
//  canVote: false. 
//Usala con el objeto citizen1.

function checkCitizenShip(citizen) {
    if(citizen1.age>=18){
        return canVote.citizen1 = true;

    }else if (citizen1.age<18){
        return " no tienes edad para votar"
    }
}

console.log(checkCitizenShip(citizen1));



//4.. 

const ciudadanos = [];

function createCitizen(userName, userLastname, userAge){
    ciudadanos.push({
        name:userName,
        lastname: userLastname,
        age: userAge
    });
    return;
}


createCitizen("Jav","hernandez","34");

console.log("Ciudadano creado:",ciudadanos);