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

// A3E6

// 20 citas de Oscar Wilde en un array

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

function mostrarcitaaleatoria() {
  let citaaleatoria = citas[Math.floor(Math.random() * (19 - 0 + 1) + 0)];
  console.log(citaaleatoria);
}

// setInterval(mostrarcitaaleatoria, 10000)
