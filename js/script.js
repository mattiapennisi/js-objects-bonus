// 1 - Filtra gli oggetti con una proprietà specifica
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

// 2 - Estrai un array di valori da una certa proprietà di un array di oggetti
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

// 3 - Conta la frequenza delle parole in una stringa
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

// 4 - Crea un array di valori unici
// Scrivi una funzione valoriUniciPerProprieta che prende un array di oggetti e una chiave, e restituisce un array contenente i valori unici di quella proprietà.

function valoriUniciPerProprieta(arrObj, key) {
  let result = []

  for (let i = 0; i < arrObj.length; i++) {
    if (!result.includes(arrObj[i][key])) {
      result.push(arrObj[i][key])  
    }
  }

  return result
}

console.log(valoriUniciPerProprieta([
    { nome: "Mario", citta: "Roma" },
    { nome: "Luigi", citta: "Milano" },
    { nome: "Anna", citta: "Roma" }
], "citta")); 

// Output: ["Roma", "Milano"]

// 5 - Unisci due array di oggetti unificando le chiavi comuni
// Scrivi una funzione unisciArrayOggetti(arr1, arr2, chiave) che unisca due array di oggetti sulla base di una chiave comune.

const utenti1 = [{ id: 1, nome: "Mario" }, { id: 2, nome: "Anna" }];
const utenti2 = [{ id: 1, città: "Roma" }, { id: 2, città: "Milano" }];

function unisciArrayOggetti(arr1, arr2, chiave) {
  let arrayUnico = [...arr1, ...arr2]
  let arrayChiave1 = []
  let arrayChiave2 = []
  let arrayChiave1Obj = {}
  let arrayChiave2Obj = {}

  for (let i = 0; i < arrayUnico.length; i++) {
    if (arrayUnico[i][chiave] == arrayUnico[0][chiave]) {
      arrayChiave1.push(arrayUnico[i])  
    } else {
      arrayChiave2.push(arrayUnico[i])
    }
  }

  for (let i = 0; i < arrayChiave1.length; i++) {
    let newKey = arrayChiave1[i]
    arrayChiave1Obj = {...arrayChiave1Obj, ...newKey}
  }

  for (let i = 0; i < arrayChiave2.length; i++) {
    let newKey = arrayChiave2[i]
    arrayChiave2Obj = {...arrayChiave2Obj, ...newKey}
  }

  return [arrayChiave1Obj, arrayChiave2Obj]
}

console.log(unisciArrayOggetti(utenti1, utenti2, "id"));

/* Output:
[
  { id: 1, nome: "Mario", città: "Roma" },
  { id: 2, nome: "Anna", città: "Milano" }
]
*/

// 6 - Confronta due array di oggetti e trova quelli che mancano in uno dei due
// Scrivi una funzione trovaDifferenze(arr1, arr2, chiave) che restituisca gli oggetti che sono presenti in un array ma non nell’altro, basandosi su una chiave.

const array1 = [
  { id: 1, nome: "Mario" },
  { id: 2, nome: "Luca" },
  { id: 3, nome: "Paola" }
];

const array2 = [
  { id: 2, nome: "Luca" },
  { id: 3, nome: "Paola" },
  { id: 4, nome: "Anna" }
];

function trovaDifferenze(arr1, arr2, chiave) {
  let oggettiDifferenti = []
  let itMatches = false

  for (let i = 0; i < arr1.length; i++) {
    itMatches = false

    for (let j = 0; j < arr2.length; j++) {

      if (arr1[i][chiave] == arr2[j][chiave]) {
        itMatches = true
        break
      }
    }

    if (!itMatches) {
      oggettiDifferenti.push(arr1[i])
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    itMatches = false

    for (let j = 0; j < arr1.length; j++) {

      if (arr2[i][chiave] == arr1[j][chiave]) {
        itMatches = true
        break
      }
    }

    if (itMatches == false) {
      oggettiDifferenti.push(arr2[i])
    }
  }

  return oggettiDifferenti
}

console.log(trovaDifferenze(array1, array2, 'id'))

// 7 - Trova il valore più comune in una proprietà di un array di oggetti
// Scrivi una funzione trovaValoreComune(arr, chiave) che restituisca il valore più comune in una certa proprietà.

const insegnanti = [
  { nome: "Paolo", corso: "Matematica" },
  { nome: "Sara", corso: "Fisica" },
  { nome: "Luca", corso: "Matematica" }
];

function trovaValoreComune(arr, chiave) {

}

console.log(trovaValoreComune(insegnanti, 'corso'));