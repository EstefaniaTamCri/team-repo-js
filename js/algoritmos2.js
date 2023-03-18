
// A2E2

function A2E2() {

let palindromo = "no lemon, no melon"

// Convertir el string en array
let toarray = palindromo.split("");

// Darle la vuelta

let toreverse = toarray.reverse();

// Unir las palabras del array

let joinarray = toreverse.join("");

  
  console.log(joinarray);

  return joinarray

}





// A2E4

function A2E4() {
  
// Temperatura media en Málaga en un array
let temp = [22, 23, 20, 22, 21, 24, 24]
let suma = 0

for (let start = 0; start < temp.length; start++) {
  suma += temp[start];
  media = suma / temp.length;
}
console.log("La temperatura media de Málaga en los ultimos 7 días ha sido de: ",media.toFixed(2),"º");
}


