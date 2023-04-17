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
      let license = random + letters(3);

      console.log(license);
    }
  }
};
// A3E5();

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
// A3E7();
