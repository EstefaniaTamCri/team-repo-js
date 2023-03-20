// let letter1 = "T";
// let dni = 0;
// let i = letter1.charCodeAt(dni);
// console.log(i);

// let letter2 = "X";
// let dni2 = 0;
// let i2 = letter2.charCodeAt(dni2);
// console.log(i2);

// function validateDni() {
//   let question = prompt("¿Cuál es su DNI o NIE?")

//  if (answer.length == 9 && answer.endsWith("")){
//    console.log("Su DNI es correcto");
//   } if (answer.charCodeAt(84) || answer.charCodeAt(88) && answer.length == 9  && answer.endsWith("")){
//     console.log("Su NIE es correcto");
//   };

// }

// validateDni()

// function validateDni() {
//   let question = prompt("¿Cuál es su DNI o NIE?")

//  if (DNI.matches("^[0-9] {8} [T | R | W | A | G | M | Y | F | P | D | X | B | J | Z | S | Q | V | H | L | C | K | E]$");){
//    console.log("Su DNI es correcto");
//   } if (answer.charCodeAt(84) || answer.charCodeAt(88) && answer.length == 9  && answer.endsWith("")){
//     console.log("Su NIE es correcto");
//   };

// }
//Para verificar la letra de un DNI
// const calcular = (param) => {

// if (isNaN (param)) {
//   alert("eso no es un número")
//   calcular(param);
// } else {
//   if (param < 0 || param > 99999999){
//     return "";
// }else{
//   const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E',];
//   const resto = param %  23;
//   const letra = letras[resto];
//   return letra;
// }

// }
// }
// const letra = calcular('79027515');
// alert(letra)

// function validaDNI() {
//   valor = DNI.value;
//   let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E',];

// if( !(/^\d{8} [A-Z]$/.test(valor))){
//   return false;
// }
// if(valor.chartAt(8) != letras [(valor.substring(0, 8)) %23]){
//   return false;}
// return true;
// }

// validaDNI()

// function a1e9(){
// let question = prompt("¿Cuál es su DNI o NIE?");

// let answer = 0

// if (answer = /^\d{8} [A-Z]$/) {
//   console.log("Su DNI  es correcto");
// } if(answer = /^[XT]\d{7}[A-Z]$/){
// console.log("Su NIE es correcto");
// }
// else{
//   console.log("Por favor, introduzcalo correctamente");}
// }
// a1e9();




// Ejercicio 10. Investiga el objeto Math, y genera 2 números aleatorios, entre el 1 y el 6, para simular un
// juego de dados. Comprueba los resultados obtenidos y muestra por consola el ganador. 
const a1e10 = ()=> {
let max = 6;
let min = 1;
let intentos = 1;

let random1 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Player 1 has drawn the number: ", random1);
let random2 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Player 2 has drawn the number: ", random2);

if (random1 > random2){
console.log("Player 1 wins!");
} if(random1 == random2){
console.log("draw!");
} else if (random1 < random2){
console.log("Player 2 wins!");
};
}
a1e10();