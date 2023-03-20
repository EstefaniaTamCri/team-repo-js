// ae1e4 semáforo//
const ae1e4 = () => {
  // Se inicia la variable isGreen//
  let isGreen = false;
  // hacer funcionar el semáforo si es false o true //
  if (isGreen) {
    console.log("Cross the road");
    isGreen = false;
  } else {
    console.log("Please await");
    isGreen = true;
  }
};
ae1e4();

// a1e6 programa email y contraseña//
const a1e6 = () => {
  // Guardar la variable userEmail y userPassword //
  let userEmail = "tolkien@lordofrings.com";
  let userPassword = "aNBR6ZeWPY";
  // Pedir al usuario que ingrese sus datos //
  let email = prompt("Please, enter your email address:");
  let password = prompt("Please, enter your password ");
  // Comparar lo que ha escrito el usuario si no es una es la otra//
  if (userEmail === email && userPassword === password) {
    console.log("Welcome Mr. Tolkien");
  } else {
    console.log("Wrong password or email");
  }
}
a1e6();
