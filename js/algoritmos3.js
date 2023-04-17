// A3E1
function A3E1() {
  // Pides número max y número minimo.

  let max = parseInt(prompt("Introduzca número máximo"));
  let min = parseInt(prompt("Introduzca número mínimo"));

  // Creas array vacío
  let arraynum = [];

  // Comprueba si el max es mayor a min, si no avisa por consola.
  if (min > max) {
    console.log("Introduzca los números en el orden correcto");

    // Si Max es mayor que min empieza el bucle
  } else {
    for (let start = 0; start < 20; start++) {
      // Se obtienen 20 números aleatorios que se almacenan en al array vacío -> arraynum

      let num = Math.floor(Math.random() * (max - min + 1) + min);
      arraynum.push(num);
    }
  }

  // Se almacena en dos variables el mayor y menor valor del array
  // Se utiliza Math.max y Math.min junto al operador de propagación "..."
  let maxvalue = Math.max(...arraynum);
  let minvalue = Math.min(...arraynum);

  // Se muestra por consola el resultado
  console.log("El array completo: ", arraynum);
  console.log("Max value: ", maxvalue);
  console.log("Min value: ", minvalue);
}

// A3E2
/*Ejercicio 2
Escribe un programa que recoge la hora del sistema, y al cargar la página pregunta al usuario su nombre. A continuación, muestra un saludo personalizado (alerta) en función de la hora, teniendo en cuenta los siguientes rangos:
• Entre las 5:00 y las 11:59 → “Good Morning, {userName}!”
• Entre las 12:00 y las 17:59 → “Good Afternoon, {userName}!”
• Entre las 18:00 y las 04:59 → “Good Evening, {userName}!”
Los saludos deberán estar predefinidos en un objeto con el identificador “greeting”.
*/
const A3E2 = () => {
  // Objeto "greeting" con los 3 saludos
  const greeting = {
    morning: "Good Morning",
    afternoon: "Good Afternoon",
    evening: "Good Evening",
  };

  // Hora del sistema
  const date = new Date();
  const hour = date.getHours();

  // Preguntar al usuario su nombre
  const userName = prompt("What is your name?");

  // Saludos en función de la hora
  let greetingMsg;
  if (hour >= 5 && hour <= 11) {
    greetingMsg = greeting.morning;
  } else if (hour >= 12 && hour <= 17) {
    greetingMsg = greeting.afternoon;
  } else {
    greetingMsg = greeting.evening;
  }

  // Mostrar el saludo personalizado (si es válido)
  if (userName.trim().length > 0) {
    alert(`${greetingMsg}, ${userName}!`);
  } else {
    alert(`Enter a valid username`);
    a3e2();
  }
};

//A3E3
// Escribe un programa que genere 10 códigos hexadecimales aleatorios (no repetidos), y escriba en la consola “Hello World!” del color aleatorio generado
function A3E3() {
  const hex = () => {
    // generar un número aleatorio entre 0 y 1, lo multiplica * 16777215 y utiliza el método .toString(16)para convertir el resultado en una cadena hexadecimal
    return Math.floor(Math.random() * 16777215).toString(16);
  };
  // almacenar valores únicos
  let codigosGenerados = new Set();
  // generar 10 codigo hexadecimales únicos
  while (codigosGenerados.size < 10) {
    let codigo = hex();
    //se asegura que el codigo no se repita si esta repetido lo quita y si no esta lo añade
    if (!codigosGenerados.has(codigo)) {
      codigosGenerados.add(codigo);
    }
  }
  codigosGenerados.forEach((codigo) => {
    //para imprimir en la consola el mensaje "Hello World!" con un color de texto correspondiente a cada código hexadecimal generado. Para lograr esto, se utiliza una cadena de formato especial %c seguida del mensaje "Hello World!", y otra cadena de formato que define el color de texto con el código hexadecimal correspondiente//
    console.log(`%cHello World!`, `color: #${codigo}`);
  });
}

// A3E4

// A3E5
//Escribe un programa que genera matrículas aleatorias. El número de matrículas aleatorias será a petición del usuario.
const A3E5 = () => {
  const number = parseInt(prompt("¿Cuántas matriculas desea generar?"));

  if (isNaN(number) || number <= 0) {
    console.error("El número de matrículas ingresado no es válido");
  } else {
    for (let i = 0; i < number; i++) {
      let min = 0000;
      let max = 9999;
      let random = Math.floor(Math.random() * (max - min + 1)) + min;

      function letters(length) {
        let chars = "BCDFGHJKLMNPRSTVWXYZ";
        let charLength = chars.length;
        let result = "";
        for (let i = 0; i < length; i++) {
          result += chars.charAt(Math.floor(Math.random() * charLength));
        }
        return result;
      }
      let license = `${random.toString().padStart(4, "0")}${letters(3)}`;
      // toString pasa 'random' a string para posteriormente que 'padStart añada los caracteres indicados
      // al principio de la cadena de texto, hasta que ésta tenga la longitud determinada(4)
      console.log(license);
    }
  }
};

// A3E6
// 20 citas de Oscar Wilde en un array
function A3E6() {
  let citas = [
    "Sé tú mismo, los demás puestos están ocupados.",
    "Vivir es lo más raro del mundo. La mayoría de las personas tan solo existen.",
    "Tengo gustos sencillos, solo me conformo con lo mejor.",
    "La única forma de deshacerse de la tentación es ceder ante ella.",
    "La belleza es la única cosa preciosa en la vida. Es difícil encontrarla, pero quien lo hace, lo tiene todo.",
    "Ser natural es una pose muy difícil de mantener.",
    "No hay nada como el amor de una mujer casada. Es una cosa de la que ningún marido tiene la menor idea.",
    "Los amigos son aquellos extraños seres que nos preguntan cómo estamos y se esperan a oír la contestación.",
    "La única forma de librarse de una tentación es caer en ella.",
    "La moda es algo tan horrible que hay que cambiarlo cada seis meses.",
    "Una buena amistad es algo que se basa en el silencio cómodo entre dos personas.",
    "El misterio del amor es más grande que el misterio de la muerte.",
    "Nunca amé a nadie como te amo a ti, nunca lo haré.",
    "Nadie es lo suficientemente rico como para comprar su pasado.",
    "El hombre es menos sincero cuando habla por cuenta propia. Dale una máscara y te dirá la verdad.",
    "Amarse a sí mismo es el comienzo de un romance de por vida.",
    "La mejor manera de librarse de la tentación es caer en ella.",
    "Nunca debemos ir por el camino trillado, porque solo conduce a donde otros han ido antes.",
    "Los celos son una especie de homenaje que la mediocridad le rinde al genio.",
    "La experiencia es el nombre que damos a nuestras equivocaciones.",
  ];

  // Se crea una función que recorre el array y muestra por consola una cita aleatoria.

  function mostrarcitaaleatoria() {
    let citaaleatoria = citas[Math.floor(Math.random() * (19 - 0 + 1) + 0)];
    console.log(citaaleatoria);
  }
  mostrarcitaaleatoria();

  // Se llama a la función y se muestra por consola la cita aleatoria cada 10 segundos.
  let interval = setInterval(mostrarcitaaleatoria, 10000);

  // Se ejecuta la funcion interval durante 2 minutos.
  setTimeout(function () {
    clearInterval(interval);
  }, 120000);
}

// A3E7
//Escribe un programa que genera 100 números aleatorios, entre 0 y 500, y los almacena en un array. A continuación, filtra todos los números impares, ordenando los pares de mayor a menor.
const A3E7 = () => {
  let numbers = [];

  const randomNumbers = (max, min) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const fillArray = (array, elements, max, min) => {
    for (let start = 0; start < elements; start++) {
      array[start] = randomNumbers(max, min);
    }
    return array;
  };

  const showArray = (array) => {
    for (let start = 0; start < array.length; start++) {
      console.log(array[start]);
    }
  };

  fillArray(numbers, 100, 500, 0);
  console.log(numbers);

  const evenNumbers = numbers.filter((number) => number % 2 == 0);
  console.log(
    "Estos son los números pares ordenados de mayor a menor: " +
      evenNumbers.sort(function (a, b) {
        return b - a;
      })
  );
  const evenNumbersIm = numbers.filter((number) => number % 2 != 0);
  console.log("Estos son los números impares: " + evenNumbersIm);

  const numeros = numbers;
  let impares = [numeros.filter((x) => x % 2 != 0).length];
  console.log("La cantidad de números impares que hay es: " + impares);
  let pares = [numeros.filter((x) => x % 2 == 0).length];
  console.log("La cantidad de números pares que hay es: " + pares);
};

// A3E8
function A3E8() {
  // Declaración de variables, cartas y palos.
  let palos = ["Clubs ♣", "Diamonds ♦", "Hearts ♥", "Spades ♠"];
  let cartas = ["ACE", "KING", "QUEEN", "JACK", 10, 9, 8, 7, 6, 5, 4, 3, 2];
  let saldo = 500;
  let seguir = "";
  let saldoact = saldo;
  let beneficios = 0;

  // Función que genera número aleatorio + palo y la muestra
  function card(numCart) {
    numAle1 = Math.floor(Math.random() * (palos.length - 1 + 0 + 1) + 0);
    numAle2 = Math.floor(Math.random() * (cartas.length - 1 + 0 + 1) + 0);
    let cartaPalo = palos[numAle1];
    let cartaAle = cartas[numAle2];
    console.log("Carta-" + numCart + ": " + cartaAle + "-" + cartaPalo);
    return {
      cartaAle: cartaAle,
      cartaPalo: cartaPalo,
    };
  }

  // Empieza la lógica del juego.
  do {
    let apuesta = parseInt(
      prompt(`Saldo actual: ${saldoact} €. Ingrese la apuesta:`)
    );

    // Comprueba que la apuesta sea válida
    while (apuesta > saldoact) {
      console.log("Apuesta inválida. No puede apostar más de su saldo actual.");
      apuesta = parseInt(
        prompt(`Saldo actual: ${saldoact} €. Ingrese la apuesta:`)
      );
    }

    // Comienza el juego, genera la carta y comprueba si ganas o pierdes. Comparando valores
    let carta1 = card(1).cartaAle;
    let carta2 = card(2).cartaAle;
    let posicionCarta1 = cartas.indexOf(carta1);
    let posicionCarta2 = cartas.indexOf(carta2);
    console.log(carta1);
    console.log(carta2);

    if (posicionCarta1 < posicionCarta2) {
      console.log("You Win");
      saldoact += apuesta;
    } else if (posicionCarta2 < posicionCarta1) {
      console.log("You Lose");
      saldoact -= apuesta;
    } else if (posicionCarta1 == posicionCarta2) {
      console.log("Draw");
    }

    console.log(`Saldo actual: ${saldoact} €`);

    if (saldoact > 0) {
      seguir = prompt("¿Quiere seguir jugando? (y/n)");
    } else {
      seguir = "n";
    }
  } while (seguir === "y" && saldoact > 0);

  // Comprueba si ha perdido todo el saldo o ha decidido retirarse
  if (saldoact <= 0) {
    console.log("Has perdido todo tu dinero. ¡Gracias por jugar!");
  } else {
    console.log("¡Hasta la próxima!");
  }

  // Comprueba beneficios
  beneficios = saldoact - saldo;
  if (beneficios > 0) {
    console.log(`Beneficio: + ${beneficios} €.`);
  } else if (beneficios < 0) {
    console.log("Beneficio: - " + Math.abs(beneficios));
  } else {
    console.log("No has ganado ni perdido dinero.");
  }
}

//A3E9
const alfabeto = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  ñ: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

const A3E9 = () => {
  let tipo = prompt("¿Quieres cifrar o descifrar?\n(cifrar/descifrar)");
    let resultado = "";
    if (tipo != "cifrar" && tipo != "descifrar") {
      alert("Introduce un código válido");
      A3E9();
    } else {
    let texto = prompt("Introduce tu mensaje").toLowerCase();
    for (let i = 0; i < texto.length; i++) {
      let letra = texto[i];

      if (letra in alfabeto) {
        let posicion = alfabeto[letra];

        if (tipo == "cifrar") {
          posicion = (posicion + 3) % 27;
        } else if (tipo == "descifrar") {
          posicion = (posicion - 3 + 27) % 27;
        }

        resultado += Object.keys(alfabeto)[posicion];
      } else {
        resultado += letra;
      }
    }
  }
  console.log(resultado);
};