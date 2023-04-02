//a3e3 Algoritmos 3//
// Escribe un programa que genere 10 códigos hexadecimales aleatorios (no repetidos), y escriba en la consola “Hello World!” del color aleatorio generado//
    function A3e3 () {
        // generar un número aleatorio entre 0 y 1, lo multiplica * 16777215 y utiliza el método .toString(16)para convertir el resultado en una cadena hexadecimal //
        return Math.floor(Math.random() * 16777215).toString(16);
    }
    // almacenar valores únicos //
let codigosGenerados = new Set ();
// generar 10 codigo hexadecimales únicos //
while (codigosGenerados.size < 10) {
    let codigo = A3e3();
    //se asegura que el codigo no se repita si esta repetido lo quita y si no esta lo añade //
    if (!codigosGenerados.has(codigo)) {
        codigosGenerados.add(codigo);
    }
}
codigosGenerados.forEach((codigo) =>{
    //para imprimir en la consola el mensaje "Hello World!" con un color de texto correspondiente a cada código hexadecimal generado. Para lograr esto, se utiliza una cadena de formato especial %c seguida del mensaje "Hello World!", y otra cadena de formato que define el color de texto con el código hexadecimal correspondiente//
    console.log(`%cHello World!`,`color: #${codigo}`);
})

