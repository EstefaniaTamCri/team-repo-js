/* Algoritmos 1*/

/* Ejercicio 1
|* Indique en la consola cuantos días tiene el mes en curso, 
|* obteniendo el mes real del sistema.
*/
const A1E1 = () => {
  const date = new Date(); // Objeto con fecha del sistema
  const month = date.getMonth(); // Objeto que saca de date el mes (0-11)
  const year = date.getFullYear(); // Objeto que saca de date el año actual
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // Obtener el número de días en el mes actual (desde el último día del mes anterior)

  return `El mes en curso tiene ${daysInMonth} días`;
};

/* Ejercicio 2
|* programa que pregunte la temperatura exterior al usuario. 
|* Si la temperatura está por debajo de 15 grados, lanzar una alerta con el mensaje: “Warm up”.
|* En caso de que la temperatura sea entre 15 grados y 25, 
|* lanzar una alerta con el mensaje: “Enjoy the weather!”. 
|* En caso de que latemperatura sea de más de 25 grados, lanzar la alerta con el mensaje: “Cool down”. 
*/
const A1E3 = () => {
  const temp = parseInt(prompt("What's the temperature outside?"));
  // Pregunta al usuario la temperatura
  if (temp < 15) {
    alert("Warm up"); // Si es menor a 15 devuelve la alerta
  } else if (temp <= 25) {
    alert("Enjoy the weather!"); // Si es menor o igual a 25 devuelve la alerta
  } else if (temp > 25) {
    alert("Cool down"); // Si es mayor a 25 devuelve la alerta
  } else {
    console.log("Not valid temperature (just numbers)");
  } // Si no se cumple ninguna de las anteriores, devuelve un aviso por consola
};

// A1 E7
function A1E7() {
  // Varibles de euros y tasas de cambio
  let euros = prompt("Introduzca Euros a convertir");
  let cambiodolar = 1.07;
  let cambioyen = 141.04;
  let cambiolibra = 0.88;
  let cambiofranco = 0.99;

  // Si el valor introducido en el promt es un número hacer el cambio a todas las monedas.

  switch (!isNaN(euros)) {
    case true:
      tasadolar = euros * cambiodolar;
      tasayen = euros * cambioyen;
      tasalibra = euros * cambiolibra;
      tasafranco = euros * cambiofranco;
      break;

    // Si no es un valor númerico comunicar el aviso.
    default:
      console.log("Introduza un valor de euros para el cambio");
      break;
  }

  let resultado = `${euros}€ equivalen a: ${tasadolar} dolares americanos, ${tasayen} yen japoneses, ${tasalibra} libras esterlinas y ${tasafranco} francos suizos`;

  return resultado;
}

//  A1 E8
function A1E8() {
  // Pedimos el número 1 y número 2 al usuario. Despues la operación a realizar.
  let num1 = parseInt(prompt("Introduzca número 1"));
  let num2 = parseInt(prompt("Introduzca número 2"));
  let operacion = prompt("Elige la operación (suma, resta, multi, divide");

  // Si el valor introducido en el número 1 u 2 no es númerico, muestra aviso.
  if (!isNaN(num1) == false) {
    console.log("Introduzca un valor correcto");
  } else if (!isNaN(num2) == false) {
    console.log("Introduzca un valor correcto");

    // Si el valor introducido es numérico procede a hacer la operación.
  } else {
    switch (operacion) {
      case "suma":
        console.log("El resultado de la suma es: ", num1 + num2);
        break;
      case "resta":
        console.log("El resultado de la resta es: ", num1 - num2);
        break;

      case "multi":
        console.log("El resultado de la multiplicación es: ", num1 * num2);
        break;

      // En el caso de la división, no se puede dividir un número menor (num1) entre uno mayor (num2)
      // Muestra aviso si eso ocurre.
      case "divide":
        if (num2 > num1) {
          console.log("No puedes dividir un número menor entre uno mayor");
        } else {
          console.log("El resultado de la división es: ", num1 / num2);
        }

        break;
      // Si introduce otro valor distinto a una operación muestra aviso.
      default:
        console.log("Eliga una operación correcta");
        break;
    }
  }
}
