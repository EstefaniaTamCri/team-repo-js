
// a1e4 Algoritmo 1 //
//Escribe un programa que simula un semáforo, estara controlado por una variable isGreen 
const a1e4 = () =>{
  // se inicia la variable isGreen , para controlar el estado del semáforo//
  let isGreen = true;
  // hacer funcionar el semáforo si es true Cross the road //
if(isGreen){
  console.log("Cross the road");
  isGreen = true;
  // y si no es true please await//
}else{
  console.log("Please await");
  isGreen = false;
}
}
a1e4();


// a1e6 Algoritmos 1 // 
// Escribir un programa que pida al usuario email y contraseña y deberá comparar los datos introducidos con los siguientes , que deberan estar guardados en variables y ponerle un mensaje de bienvenida y si los datos no son correctos pedirle que vuelva escribir sus datos //
const a1e6 = () =>{
  // guarda dos variables que contienen los datos email y contraseña que el usuario debe introducir //
  let userEmail = "tolkien@lordofrings.com";
  let userPassword = "aNBR6ZeWPY"
  // pedir al usuario que introduzca sus datos //
  let email = prompt("Please, enter your email address:");
  let password = prompt("Please, enter your password:");
  // comparar los datos introducidos por el usuario sean iguales que los datos guardados en las variables //
  if (userEmail == email && userPassword == password) {
    // si ambos son iguales se muestra por consola el mensaje de bienvenido //
    console.log("Welcome Mr. Tolkien");
    // si no son iguales se muestra por consola , el mensaje que vuelva a escribir otra vez password o email //
  }else{
    console.log("Wrong password or email");
  }
}
a1e6();