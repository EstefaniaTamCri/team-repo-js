//Preguntar al usuario si DNI o NIE. Comprobar, mediante las funciones para strings, si los datos introducidos son válidos
const A1E9 = () =>{
let question = prompt("¿Cuál es su DNI o NIE?");
question = question.replace(/[\s\-]/gi, '')

if (/^[xtXT]\d{7}[a-zA-Z]$/.test(question)) {
    alert("El NIE introducido es válido.");
    return;
  }
  if (/^\d{8}[a-zA-Z]$/.test(question)) {
    const letra = question.charAt(question.length - 1);
    const numeros = parseInt(question.substring(0, 8));
    const letrasValidas = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const letraCorrecta = letrasValidas.charAt(numeros % 23);

    if (letra.toUpperCase() === letraCorrecta) {
      alert("El DNI introducido es válido.");
      return;
    }
  }

  alert("La identificación introducida no es válida.");
}
// A1E9();


// Ejercicio 10. Investiga el objeto Math, y genera 2 números aleatorios, entre el 1 y el 6, para simular un
// juego de dados. Comprueba los resultados obtenidos y muestra por consola el ganador. 
const A1E10 = ()=> {
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
A1E10();