/* Algoritmos 1*/

// A1E1
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

// A1E2
// e1e2 Mes y dias //
// Declarar la variable y el prompt para preguntar al usuario //

const A1E2 = () => {
  let month = prompt(
    "Please, choose a month : Geneuary || February || March || April || June || July || August || September || October || November || December"
  );
  console.log(month.toUpperCase);
  // Almacenar datos y sacar booleano dependiendo de la opcion elegida por el usuario //
  if (
    month == "Geneuary" ||
    "March" ||
    "May" ||
    "July" ||
    "August" ||
    "October" ||
    "December"
  ) {
    console.log(
      month.charAt(0).toUpperCase() + month.slice() + " have 31 days"
    );
  } else if (month.to == "April" || "June" || "September" || "November") {
    console.log(month.charAt(0).toUpperCase() + " have 30 days");
  } else if (month == "febrero") {
    console.log(month.charAt(0).toUpperCase() + " have 28 days");

    // en caso de no selecionar cualquier opcion válida proporcionada al usuario //
  } else {
    console.log("That`s not a real month");
  }
};

// A1E3
/* Ejercicio 3
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

// A1E4
//Escribe un programa que simula un semáforo, estara controlado por una variable isGreen
const A1E4 = () => {
  // se inicia la variable isGreen , para controlar el estado del semáforo//
  let isGreen = true;
  // hacer funcionar el semáforo si es true Cross the road //
  if (isGreen) {
    console.log("Cross the road");
    isGreen = true;
    // y si no es true please await//
  } else {
    console.log("Please await");
    isGreen = false;
  }
};

// A1E5
const eie5 = () => {
  let userNumber = prompt("Choose a Temperature ....");
  let tempMax = 300;
  let tempMin = -300;
  let tempNames = [
    " Absolute Zero temperaure, Freezing point, Body temperature, Boiling point",
  ];
  let Farenheit = userNumber * 1.8 + 32;

  if (isNaN(userNumber)) {
    alert("Sorry,   That`s an invalid Number,  Try it again !!! ");
  } else {
    switch (userNumber) {
      case "-273":
        alert("This is Absolute Zero temperature:" + "  " + userNumber + "Cº");
        user = confirm("Would you like convert Celsius to Farenheit");
        if (user === true) {
          alert(" The Farenheit temperature is : " + " " + Farenheit + "ºF !");
        }
        break;
      case "0":
        alert("This is Freezing point temperature:" + "  " + userNumber + "Cº");
        user = confirm("Would you like convert Celsius to Farenheit");
        if (user === true) {
          alert(" The Farenheit temperature is : " + " " + Farenheit + "ºF !");
        }
        break;
      case "37":
        alert("This is Body temperature:" + "  " + userNumber + "Cº");
        user = confirm("Would you like convert Celsius to Farenheit");
        if (user === true) {
          alert(" The Farenheit temperature is : " + " " + Farenheit + "ºF !");
        }
        break;
      case "100":
        alert("This is Boiling point temperature :" + "  " + userNumber + "Cº");
        user = confirm("Would you like convert Celsius to Farenheit");
        if (user === true) {
          alert(" The Farenheit temperature is : " + " " + Farenheit + "ºF !");
        }
        break;
      case userNumber:
        alert("The temperature is :" + "  " + userNumber + "Cº");

      default:
        if (userNumber > tempMax) {
          alert("Burn time, you are dead!!");
        } else if (userNumber < tempMin) {
          alert("Ice age or winter is coming!!!");
        } else if (userNumber) {
          let user = confirm("Would you like convert Celsius to Farenheit");

          if (user === true) {
            Farenheit;
            alert(
              " The Farenheit temperature is : " + " " + Farenheit + "ºF !"
            );
          }
        }
        break;
    }
  }
};

// A1E6
// Escribir un programa que pida al usuario email y contraseña y deberá comparar los datos introducidos con los siguientes , que deberan estar guardados en variables y ponerle un mensaje de bienvenida y si los datos no son correctos pedirle que vuelva escribir sus datos //
const A1E6 = () => {
  // guarda dos variables que contienen los datos email y contraseña que el usuario debe introducir //
  let userEmail = "tolkien@lordofrings.com";
  let userPassword = "aNBR6ZeWPY";
  // pedir al usuario que introduzca sus datos //
  let email = prompt("Please, enter your email address:");
  let password = prompt("Please, enter your password:");
  // comparar los datos introducidos por el usuario sean iguales que los datos guardados en las variables //
  if (userEmail == email && userPassword == password) {
    // si ambos son iguales se muestra por consola el mensaje de bienvenido //
    console.log("Welcome Mr. Tolkien");
    // si no son iguales se muestra por consola , el mensaje que vuelva a escribir otra vez password o email //
  } else {
    console.log("Wrong password or email");
  }
};

// A1E7
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
      tasadolar = (euros * cambiodolar).toFixed(2);
      tasayen = (euros * cambioyen).toFixed(2);
      tasalibra = (euros * cambiolibra).toFixed(2);
      tasafranco = (euros * cambiofranco).toFixed(2);
      break;

    // Si no es un valor númerico comunicar el aviso.
    default:
      console.log("Introduza un valor de euros para el cambio");
      break;
  }

  let resultado = `${euros}€ equivalen a: ${tasadolar} dolares americanos, ${tasayen} yenes japoneses, ${tasalibra} libras esterlinas y ${tasafranco} francos suizos`;

  return resultado;
}

// A1E8
function A1E8() {
  // Pedimos el número 1 y número 2 al usuario. Despues la operación a realizar.
  let num1 = parseInt(prompt("Introduzca número 1"));
  let num2 = parseInt(prompt("Introduzca número 2"));
  let operacion = prompt("Elige la operación (suma, resta, multi, divide)");

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

// A1E9
//Preguntar al usuario si DNI o NIE. Comprobar, mediante las funciones para strings, si los datos introducidos son válidos
const A1E9 = () => {
  let question = prompt("¿Cuál es su DNI o NIE?");
  question = question.replace(/[\s\-]/gi, "");

  if (/^[xtXT]\d{7}[a-zA-Z]$/.test(question)) {
    alert("El NIE introducido es válido.");
    return;
  }
  if (/^\d{8}[a-zA-Z]$/.test(question)) {
    const letra = question.charAt(question.length - 1);
    const numeros = parseInt(question.substring(0, 8));
    const letrasValidas = "TRWAGMYFPDXBNJZSQVHLCKE";
    const letraCorrecta = letrasValidas.charAt(numeros % 23);

    if (letra.toUpperCase() === letraCorrecta) {
      alert("El DNI introducido es válido.");
      return;
    }
  }
  alert("La identificación introducida no es válida.");
};

// A1E10
// Ejercicio 10. Investiga el objeto Math, y genera 2 números aleatorios, entre el 1 y el 6, para simular un
// juego de dados. Comprueba los resultados obtenidos y muestra por consola el ganador.
const A1E10 = () => {
  let max = 6;
  let min = 1;
  let intentos = 1;

  let random1 = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("Player 1 has drawn the number: ", random1);
  let random2 = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log("Player 2 has drawn the number: ", random2);

  if (random1 > random2) {
    console.log("Player 1 wins!");
  }
  if (random1 == random2) {
    console.log("draw!");
  } else if (random1 < random2) {
    console.log("Player 2 wins!");
  }
};
