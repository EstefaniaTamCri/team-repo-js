
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


const numeros = numbers;

let impares = [numeros.filter((x) => x % 2 != 0).length];
console.log("La cantidad de numeros impares que hay es: " + impares);
let pares = [numeros.filter((x) => x % 2 === 0).length];
console.log("La cantidad de números pares que hay es: " + pares);


console.log(message);
