// a2e1
//Escribe un programa para contar las letras en la palabra: 
//palindrome, mostrándolas una a una.
const A2E1 = () =>{
  let word = "palindrome";
let change = Array.from(word);
console.log(change);  
}
// A2E1()

/* a2e6 :
Programa para generar estadísticas de texto.Recibirá un string proporcionado por el
usuario, y a modo de ejemplo, para la entrada: Lorem ipsum dolor sit amet, mostrará la siguiente
salida:
Length: 26 characters
Length witout white-space: 22 characters
Words: 5
Unique words: 5
Unique words(%): 100%
Length of shortest word: 3 characters
Length of longest word: 5 characters
Avg. word length: 4 (con redondeo al número entero más cercano)*/

const A2E6 = () => {
  // pide al usuario, el texto para analizar//
  const texto = prompt("Ingrese el texto a analizar:");
  // se crea 4 variables para analizar el texto //
  // almacenar la longitud del texto //
  let longitudTexto = 0;
  // almacenar todas las palabras del texto //
  let palabras = [];
  // contar el número de palabras que contiene el texto//
  let numPalabras = 0;
  // acumula los caracteres de una palabra a medida que se analiza el texto//
  let palabraActual = "";
  // recorrer las palabras//
  for (let start = 0; start < texto.length; start++) {
    // extrae el carácter actual del texto y asignándolo a una variable //
    let caracterActual = texto[start];
    // Comprueba si es un espacio en blanco, un salto de linea ,un tarbulador //
    if (
      caracterActual === " " ||
      caracterActual === "\n" ||
      caracterActual === "\t"
    ) {
      // este if verifica si la variable tiene una longitud mayor que 0, es decir , si hay una palabra acumulada en la variable  //
      if (palabraActual.length > 0) {
        // Cuando se cumple la condición del if de arriba, estas tres instrucciones hacen ://
        // añade la palabra acumulada en palabraActual  al array "palabras" "
        palabras.push(palabraActual);
        //  se reinicia palabraActual a una cadena vacía para poder acumular la siguiente palabra //
        palabraActual = "";
        // incrementa en 1 la variable numPalabras para llevar un registro de la cantidad total de palabras que se han encontrado hasta el momento en el texto.//
        numPalabras++;
      }
      // Este bloque de código se ejecuta cuando el caracter actual no es un espacio en blanco, un salto de línea o un tabulador.  En este caso, se asume que el caracter actual es parte de una palabra
    } else {
      palabraActual += caracterActual;
    }
  }
  //La condición del if verifica si la variable palabraActual contiene una palabra completa, es decir, si su longitud es mayor que cero.//
  if (palabraActual.length > 0) {
    // se agrega la palabra al array palabras //
    palabras.push(palabraActual);
    //se incrementa en uno para llevar la cuenta de las palabras totales en el texto.//
    numPalabras++;
  }
  // se crea una variable para almacenar la longitud total del texto ingresado sin contar los espacios en blanco//
  let longitudTextoSinEspacios = 0;
  // recorrer cada caracter de una cadena de texto//
  for (let start = 0; start < texto.length; start++) {
    // guardar el caracter encontrado en start, en la variable caracterActual//
    let caracterActual = texto[start];
    // este if cuenta cuántos caracteres no son espacios en blancos ,saltos de lineas o tarburador//
    // se utiliza está ! condición para que no sea espacios en blancos , saltos de lineas o tarburador//
    if (
      caracterActual !== " " &&
      caracterActual !== "\n" &&
      caracterActual !== "\t"
    ) {
      // si la condición es verdadera se incrementa la longitdusTextoSinEspacios en 1 //
      longitudTextoSinEspacios++;
    }
  }
  //Imprimir las estadísticas//
  // sacar por consola la longitud del texto , contando toda la longitud incluso los espacios //
  console.log("length:", texto.length, "characters");
  // sacar por consola la longitud del texto sin espacios //
  console.log(
    "Length without white-space:",
    longitudTextoSinEspacios,
    "characters"
  );

  // se crea un objeto set para contar solo las palabras unicas , se asegura de que solo se retenga las palabras únicas descartando cualquier duplicado
  let palabrasUnicas = new Set(palabras);
  // saca por consola el número de palabras //
  console.log("Words:", numPalabras);
  // devuelve la cantidad de palabras unicas sin contar las repetidas //
  console.log("Unique words:", palabrasUnicas.size);
  // calcular el porcentaje de palabras únicas en relación con el número total de palabras , multiplica el resultado *100 para convertir el número decimal en porcentaje  y concatenar la cadena de texto con %
  console.log("Unique words(%):",Math.round((palabrasUnicas.size / numPalabras) * 100) + "%" );
// creo una variable let minPalabra , para almacenar la longitud de la palabra más corta //
// encontrar la longitud de la palabra más corta //
  let minPalabra = Math.min(...palabras.map((palabra) => palabra.length));
  console.log("Length of shortest word:", minPalabra, "characters");
// encontrar la longitud de la palabra más larga //
  let maxPalabra = Math.max(...palabras.map((palabra) => palabra.length));
  console.log("Length of longest word:", maxPalabra, "characters");
// calcular el promedio de la longitud de palabras //
  let longitudPalabras = palabras.reduce(
    (suma, palabra) => suma + palabra.length,
    0
  );
  let promedioLongitudPalabras = Math.round(longitudPalabras / numPalabras);
  console.log("Avg. word length:", promedioLongitudPalabras);
};
// A2E6();

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