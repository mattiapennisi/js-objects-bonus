// Filtra gli oggetti con una proprietà specifica
// Scrivi una funzione filtraPerProprieta(arr, chiave, valore) che accetti un array di oggetti e restituisca solo quelli in cui la proprietà chiave ha un certo valore.
const studenti = [
  { nome: "Paolo", corso: "Matematica" },
  { nome: "Sara", corso: "Fisica" },
  { nome: "Luca", corso: "Matematica" }
];

function filtraPerProprieta(arr, chiave, valore) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][chiave] == valore) {
            result.push(arr[i])
        }
    }

    return result
}

console.log(filtraPerProprieta(studenti, "corso", "Matematica")); 

// Output: [{ nome: "Paolo", corso: "Matematica" }, { nome: "Luca", corso: "Matematica" }]

// Estrai un array di valori da una certa proprietà di un array di oggetti
// Scrivi una funzione estraiValori(arr, chiave) che restituisca un array con tutti i valori associati a una certa proprietà.
const prodotti = [
  { nome: "Laptop", prezzo: 1000 },
  { nome: "Mouse", prezzo: 30 },
  { nome: "Monitor", prezzo: 200 }
];

function estraiValori(arr, chiave) {
  let result = []

  for (let index = 0; index < arr.length; index++) {
    let proprieta = arr[index][chiave]

    result.push(proprieta)
  }

  return result
}

console.log(estraiValori(prodotti, "nome")); 

// Output: ["Laptop", "Mouse", "Monitor"]

// Conta la frequenza delle parole in una stringa
// Scrivi una funzione conteggioParole(str) che restituisca un oggetto in cui le chiavi sono le parole e i valori il numero di volte che compaiono nella stringa.

function conteggioParole(str) {
  let arrayParole = str.split(' ')

  let parolaTemp = null
  let paroleObject = {}
  let paroleObjectKeys = []
  
  for (let index = 0; index < arrayParole.length; index++) {
    
    parolaTemp = arrayParole[index]

    if (paroleObjectKeys.includes(parolaTemp)) {
      paroleObject[parolaTemp] += 1
    } else {
      paroleObjectKeys.push(parolaTemp)
      paroleObject[parolaTemp] = 1
    }
  }

  return paroleObject
}

console.log(conteggioParole("ciao mondo ciao a tutti mondo")); 

// Output: { ciao: 2, mondo: 2, a: 1, tutti: 1 }

//  Crea un array di valori unici
// Scrivi una funzione valoriUniciPerProprieta che prende un array di oggetti e una chiave, e restituisce un array contenente i valori unici di quella proprietà.
// javascript
// console.log(valoriUniciPerProprieta([
//     { nome: "Mario", citta: "Roma" },
//     { nome: "Luigi", citta: "Milano" },
//     { nome: "Anna", citta: "Roma" }
// ], "citta")); 

// Output: ["Roma", "Milano"]

// Unisci due array di oggetti unificando le chiavi comuni
// Scrivi una funzione unisciArrayOggetti(arr1, arr2, chiave) che unisca due array di oggetti sulla base di una chiave comune.
const utenti1 = [{ id: 1, nome: "Mario" }, { id: 2, nome: "Anna" }];
const utenti2 = [{ id: 1, città: "Roma" }, { id: 2, città: "Milano" }];

// console.log(unisciArrayOggetti(utenti1, utenti2, "id"));
/* Output:
[
  { id: 1, nome: "Mario", città: "Roma" },
  { id: 2, nome: "Anna", città: "Milano" }
]
*/

// Confronta due array di oggetti e trova quelli che mancano in uno dei due
// Scrivi una funzione trovaDifferenze(arr1, arr2, chiave) che restituisca gli oggetti che sono presenti in un array ma non nell’altro, basandosi su una chiave.

// Trova il valore più comune in una proprietà di un array di oggetti
// Scrivi una funzione trovaValoreComune(arr, chiave) che restituisca il valore più comune in una certa proprietà.