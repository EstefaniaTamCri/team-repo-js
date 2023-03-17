// A1 E7

function A1E7() {
  let euros = prompt("Introduzca Euros a convertir");
  let cambiodolar = 1.07;
  let cambioyen = 141.04;
  let cambiolibra = 0.88;
  let cambiofranco = 0.99;

  switch (!isNaN(euros)) {
    case true:
      tasadolar = euros * cambiodolar;
      tasayen = euros * cambioyen;
      tasalibra = euros * cambiolibra;
      tasafranco = euros * cambiofranco;
      break;

    default:
      console.log("Introduza un valor de euros para el cambio");
      break;
  }

  let resultado = `${euros}€ equivalen a: ${tasadolar} dolares americanos, ${tasayen} yen japoneses, ${tasalibra} libras esterlinas y ${tasafranco} francos suizos`;
  return resultado;
}
//  A1 E8
// function A1E8() {
let num1 = parseInt(prompt("Introduzca número 1"));
let num2 = parseInt(prompt("Introduzca número 2"));
let operacion = prompt("Elige la operación (suma, resta, multi, divide");

if (num1 == !isNaN) {
  console.log("Introduzca un valor correcto");
} else if (num2 == !isNaN) {
  console.log("Introduzca un valor correcto");
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
    case "divide":
      console.log("El resultado de la división es: ", num1 / num2);
      break;

    default:
      console.log("Eliga una operación correcta");
      break;
  }
}
// }

// console.log(A1E8());
