/* Algoritmos 2*/

// A2E2
function A2E2() {
  let palindromo = "no lemon, no melon";
  
  // Convertir el string en array
  let toarray = palindromo.split("");
  
  // Darle la vuelta
  
  let toreverse = toarray.reverse();
  
  // Unir las palabras del array
  
  let joinarray = toreverse.join("");

  console.log(joinarray);

  return joinarray;
}

// A2E4
function A2E4() {
  // Temperatura media en Málaga en un array
  let temp = [22, 23, 20, 22, 21, 24, 24];
  let suma = 0;
  
  // Recorrer array desde el inico hasta el final
  // Hacer la suma de las temperaturas y dividirlas entre el número de valores en el array para la media
  for (let start = 0; start < temp.length; start++) {
    suma += temp[start];
    media = suma / temp.length;
  }
  // Mostrar en consola la media con dos digitos decimales
  let resultado =
  ("La temperatura media de Málaga en los ultimos 7 días ha sido de: ",
  media.toFixed(2),
  "º");
  return resultado;
}

/* Ejercicio 7 - Playing games
|* Mediante el objeto Math, genera un número aleatorio entero entre 0 y 10, y guárdalo en una variable., 
|* A continuación pide al usuario que adivine el número. Tendrá como máximo 3 intentos.
|* El programa debe mostrar el número de intentos disponibles. Si acierta, mostramos el mensaje:
|* “You win!”. Si falla, pero le quedan intentos, mostramos el mensaje “Try it again”.
|* Si agota los intentos y no ha conseguido acertar, mostramos el mensaje: “Sorry, Good luck in love”
*/
const A2E7 = () => {
  //Genera los parámetros del juego
  let min = 0;
  let max = 10;
  let attempts = 3;
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  // Revela la solución: 
  //console.log(random);

  //Inicia el juego
  while (attempts > 0) {
    answer = parseInt(prompt(`Guess the number between ${min} and ${max}`));
    if (isNaN(answer) || answer > max || answer < min) {
      console.log(`Just numbers between ${min} and ${max}`);
    } else if (answer == random) { //Si la respuesta es igual al número
      console.log("You win!");
      break;
    } else if (attempts > 1) { //Si la respuesta es distinta al número
      console.log("Try it again");
      attempts--; //Resta un intento
      console.log(`${attempts} attempts remaining`); //Muestra los intentos
    } else {
      attempts--;
      console.log("Sorry, Good luck in love"); //Cuando se agotan los intentos
      break;
    }
  }
};