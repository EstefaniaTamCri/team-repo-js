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

const a2e6 = () => {
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
    // se utiliza está condición para que no sea espacios en blancos , saltos de lineas o tarburador//
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
  console.log("length:", texto.length, "characters");
  console.log("Length without white-space:", longitudTextoSinEspacios , "characters");


  let palabrasUnicas = new Set(palabras);
  console.log("Words:", numPalabras);
  console.log("Unique words:", palabrasUnicas.size);
  console.log(
    "Unique words(%):",
    Math.round((palabrasUnicas.size / numPalabras) * 100) + "%"
  );

  let minPalabra = Math.min(...palabras.map((palabra) => palabra.length));
  console.log("Length of shortest word:", minPalabra, "characters");

  let maxPalabra = Math.max(...palabras.map((palabra) => palabra.length));
  console.log("Length of longest word:", maxPalabra, "characters");

  let longitudPalabras = palabras.reduce(
    (suma, palabra) => suma + palabra.length,
    0
  );
  let promedioLongitudPalabras = Math.round(longitudPalabras / numPalabras);
  console.log("Avg. word length:", promedioLongitudPalabras);

  
};
a2e6();
