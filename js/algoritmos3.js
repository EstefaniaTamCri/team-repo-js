// a3e5 Escribe un programa que genere matrículas automáticas
// let max = 0000;
// let min = 9999;
// let random = Math.floor(Math.random() * (max - min + 1) ) + min;

// let abecedario = ['B', 'C', 'D', 'F', 'G', 'H', 'J',
// 'K', 'L', 'M','N','P','R','S','T','V','W', 'X','Y','Z' ];

// let letters1 =  Math.floor(Math.random() * 20 );
// let letters2 =  Math.floor(Math.random() * 20 ) ;
// let letters3 =  Math.floor(Math.random() * 20 ) ;

// let question = parseInt(prompt("¿Cuántas matrículas desea generar?"))
// console.log(random + " " + abecedario[letters1]  + abecedario[letters2] + abecedario[letters3]);

// let numberPlate = random + " " + abecedario[letters1]  + abecedario[letters2] + abecedario[letters3];
// let numberPlate = [random, abecedario[letters1], abecedario[letters2], abecedario[letters3]]
// console.log(numberPlate);
// console.log(random)
// console.log(( abecedario[letters1] ));
// console.log(( abecedario[letters2] ));
// console.log(( abecedario[letters3] ));

// const mathOps = {
//   randomNumbers: (max, min) =>
//     Math.floor(Math.random() * (max - min + 1)) + min,
//   fillArray: (array, elements, max, min) => {
//     for (let start = 0; start < elements; start++) {
//       array[start] = mathOps.randomNumbers(max, min);
//     }
//     return array;
//   },
//   showArray: (array) => {
//     for (let start = 0; start < array.length; start++) {
//       console.log(array[start]);
//     }
//   },
//   numbers: [],
// };

// mathOps.fillArray(mathOps.numbers, 100, 500, 0);
// mathOps.showArray(mathOps.numbers);
// console.log(mathOps.numbers);

// let different = showArray
// let array = Array.from(different)
// console.log(array);

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
// showArray(numbers);

console.log(numbers);


const numeros = numbers;

let impares = [numeros.filter((x) => x % 2 != 0).length];
console.log("La cantidad de numeros impares que hay es: " + impares);
let pares = [numeros.filter((x) => x % 2 === 0).length];
console.log("La cantidad de números pares que hay es: " + pares);



