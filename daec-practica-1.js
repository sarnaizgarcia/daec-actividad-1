// REQUERIMIENTO 1

// Realiza un programa en JavaScript que recorra un array de 10 números y calcule la media aritmética de diez números.
// Los números deben de estar comprendidos entre el 0 y 100,
// si se detectará algún número fuera de ese rango no se tendría en cuenta para su cálculo.

// Inicializo la variable numeros con un array vacío.
let numeros = [];

// Genero 10 numeros aleatorios con la función obtenerNumeroRandom() y los añado a numeros.
for (let i = 0; i < 10; i++) {
    let numero = obtenerNumeroRandom();
    numeros.push(numero);
}

// Inicializamos una variable con el valor de la longitud de numeros que representará la cantidad de números mayores que 100 en numeros.
let longitudNumeros = numeros.length;

/**
 * Devuelve un número aleatorio comprendido entre 0 y 100, ambos inclusive.
 *
 * @returns {number} Número entero entre 0 y 100.
 */
function obtenerNumeroRandom() {
    return Math.floor(Math.random() * 101);
}

/**
 * Suma un numero a otra cantidad acumulada.
 *
 * @param {number} acumulador
 * @param {number} a
 * @returns {number} Número resultado de sumar a al acumulador.
 */
 function suma(acumulador, a) {
    if (a > 100) {
        longitudNumeros--
    }
    return acumulador + a;
}

// REQUERIMIENTO 2
// Calcular la moda

function calcularModa(arrayDeNumeros) {
    const setNumeros = new Set(arrayDeNumeros);
}


// REQUERIMIENTO 3
// Calcular la mediana

/**
 * Calcula la mediana del array
 *
 * @param {Array} arrayDeNumeros
 * @returns {number} Mediana de los números que forman el array
 */
function calculaMediana(arrayDeNumeros) {
    let longitudArray = arrayDeNumeros.length;
    if (longitudArray % 2 === 0) {
        return arrayDeNumeros.slice(longitudArray/2 - 1, longitudArray/2 + 1).reduce((a, b) => a + b)/2;
    } else {
        return arrayDeNumeros.slice((longitudArray-1)/2)[0];
    }
}

// Ejecuto la función reductora suma a acada elemento del array, iniciando con un acumulado 0.
const mediaAritmetica = numeros.reduce(suma, 0)/longitudNumeros;

const mediana = calculaMediana(numeros);

console.log('El array sobre el que vamos a operar es:\n ', numeros);
console.log(`La media aritmética es ${mediaAritmetica}`);
console.log(`La mediana es ${mediana}`);

// la moda no existe
