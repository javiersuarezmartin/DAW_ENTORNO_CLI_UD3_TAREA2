function primo() {

    var numero = '';    

    // Controlamos que la respuesta sea correcta para poder evaluar si es primo.
    do {
        numero = prompt('Introduzca un valor para comprobar si es primo:');
        numero = parseInt(numero); // Convertimos a Entero.
        if (Number.isInteger(numero) && numero >=0) {
            // Comprobamos primero los casos especiales de 0 y 1.
            if (numero < 2) {
                alert('El número ' + numero + ', por convenio, no se considera ni primo ni compuesto.');
            } else {
                // Llamada a la funcion comprobar_primo().
                resultado = comprobar_primo(numero);  

                // Mostar resultado
                if (resultado === false) {
                    alert('El número ' + numero + ' NO es primo.');
                } else {
                    alert('El número ' + numero + ' es primo.');
                };
            };

        } else {
            alert('Tu elección no es válida, debe ser un número entero positivo.');
        };       
    }
    while (!Number.isInteger(numero) || numero < 0);  
   
};


// Función que comprueba si el número es primo.

function comprobar_primo(numero) {
    var primo = true;

    // Un número es primo si solo es divisible por 1 o por si mismo.
    for(var i=2; i<numero; i++) {
        
        if (numero % i === 0) {
            primo = false;
            i = numero; // Forzamos salida del bucle porque ya hemos encontrado 1 divisor.(Diferente a 1 o a si mismo)
        };
    };    

    return (primo);
};