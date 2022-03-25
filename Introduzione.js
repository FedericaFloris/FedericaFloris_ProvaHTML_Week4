function sum(a, b) {
    return a + b;
}

console.log("un messaggio da visualizzare");

//Dichiarazione di una variabile


//assegnazione
x = 5;

//inizializzazione
letz = 7;
z = "7";

const costante = 10;
//constante =90; ERRORE


//array

let primoArray = [1, 2, 3];
primoArray = [1, 'Renata', 2, true, 4.5];

let primoElemento = primoArray[0];
console.log(primoElemento);

console.log("----------------")
for (let i = 0; i < primoArray.length; i++) {
    console.log(primoArray[i])
}


console.log("----------------")

primoArray.push("prova", "inserimento");

for (let i = 0; i < primoArray.length; i++) {
    console.log(primoArray[i])
}

primoArray.pop(); //elimina l ultimo elemento
console.log("------------------")
for (let i = 0; i < primoArray.length; i++) {
    console.log(primoArray[i])
}

primoArray.splice(0, 1);  // 0 posizione di partenza 1 indica quanti elementi devo cancellare
                         //(n,m) parte dalla posizione n ed elimina m elementi
console.log("------------------")
for (let i = 0; i < primoArray.length; i++) {
    console.log(primoArray[i])
}

console.log("------------------")
let food = ["uova", "pane", "pasta", "frutta"];

// recuperare il primo elemento che rispetta una condizione
let foodWithP = food.find((item) => item.startsWith("p")); // trovami l elemento item tale che soddisfa (=>) questa condizione
//il mettodo find trova solo il primo che rispetta queesta condizione
console.log(foodWithP);

//se volessi tutti quelli che iniziano per p devo fare:

let itemsWithP = food.filter((item) => item.startsWith("p"));
for (let i = 0; i < itemsWithP.length; i++) {
    console.log(itemsWithP[i]);
}

//ordinamento
food.sort();
console.log("------------------")
for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
}

food.reverse();
console.log("------------------")
for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
}

console.log("------------------")

class Persona {
    constructor(firstName, lastName) {  //funzione che serve per costruire gli oggetti(le istanze) di questa classe
        this.firstName = firstName; //this si riferisce alla classe dopo = è il parametro
        this.lastName = lastName;
    }

    //setter (scrittura)
    set firstName(value) {
        this._firstName = value;
    }
    set lastName(value) {
        this._lastName = value;
    }

    //getter
    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

}

let pers = new Persona("Mario", "Rossi"); //creo un oggetto di tipo persona
console.log(pers.getFullName());  //pers.getFullName è una stringa

let p = new Object({
    nome: "Renata",
    cognome: "Carriero"
});
console.log(p.nome + ' ' + p.cognome);

//cambiare i valori di p
p.nome = "Antonia",
    p.cognome = "Sachitella";
console.log(p.nome + ' ' + p.cognome);

//utilizzo di == vs ===   == confronta solo il valore mentre === valore e tipo
let r = 4;
let t = "4";
let q = 4;

console.log(r == t); //true
console.log(r === t); //false
console.log(q === t); //true




