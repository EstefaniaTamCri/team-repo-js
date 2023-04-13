
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

  // Recorrer array desde el inico hasta el final
  // Hacer la suma de las temperaturas y dividirlas entre el número de valores en el array para la media
  for (let start = 0; start < temp.length; start++) {
    suma += temp[start];
    media = suma / temp.length;
  }

  // Mostrar en consola la media con dos digitos decimales
  console.log("La temperatura media de Málaga en los ultimos 7 días ha sido de: " + media.toFixed(2) + "º");
}




// A2E8

function A2E8() {

  
  function generarCaracteres(min, max) {
    let caracteres = "";
    for (let i = min; i <= max; i++) {
      caracteres += String.fromCharCode(i);
    }
    return caracteres;
  }
  
  // Se pide al usuario que introduzca la longitud de la contraseña
  let long = parseInt(prompt("Introduce la longitud de la contraseña (entre 8 y 16 caracteres):"));
  
  // Comprobación de que long es un número. Si es otro valor, se vuelve a pedir la contraseña.
  if (isNaN(long)) {
    alert("Por favor, introduzca la longitud de la contraseña correctamente")
    long = parseInt(prompt("Introduce la longitud de la contraseña (entre 8 y 16 caracteres):"));
  }
  
  // Si es un número sigue el programa.
  if (!isNaN(long)) {
  
    // Se comprueba que el tamaño está dentro de lo establecido, 8-16.
    if (long < 8 || long > 16) {
      alert("La longitud introducida no es válida.");
      return;
    }
  
    // Se le pregunta al usuario si quiere minusculas, mayusculas, números y caracteres.
    let minus = confirm("¿Quieres incluir minúsculas?");
    let mayus = confirm("¿Quieres incluir mayúsculas?");
    let nums = confirm("¿Quieres incluir números?");
    let caract = confirm("¿Quieres incluir caracteres?");
  
    // Si ninguno de los valores ha sido seleccionado, la contraseña tendrá minusculas.
    if (!minus && !mayus && !nums && !caract) {
      minus = true;
    }
  
    let caracteres = "";
  
    // Se generan los caracteres en base a las opciones seleccionadas por el usuario
    if (minus) {
      caracteres += generarCaracteres(97, 122); // letras minúsculas
    }
  
    if (mayus) {
      caracteres += generarCaracteres(65, 90); // letras mayúsculas
    }
  
    if (nums) {
      caracteres += generarCaracteres(48, 57); // números
    }
  
    if (caract) {
      caracteres += generarCaracteres(33, 47) + generarCaracteres(58, 64) + generarCaracteres(91, 96) + generarCaracteres(123, 126); // caracteres especiales
    }
  // Se crea variable vacia donde se almacenará la contraseña
    let password = "";
  
    // Se genera la contraseña
    for (let i = 0; i < long; i++) {

    // Selecciona un caracter aleatorio en una posición aleatoria
      let posicion = generarNumeroAleatorio(0, caracteres.length - 1);

      // Forma la contraseña
      password += caracteres.charAt(posicion);
    }
  // Te muestra la constaseña
    alert("Tu contraseña generada es: " + password);
  
    console.log(`La contraseña es ${password}`);
  }
  // Funcion de número aleatorio
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}











