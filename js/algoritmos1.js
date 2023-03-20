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

