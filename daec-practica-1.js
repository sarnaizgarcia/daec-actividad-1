// DESARROLLO DE APLICACIONES WEB EN ENTORNO CLIENTE - PRÁCTICA 1

// REQUERIMIENTO 1
// Realiza un programa en JavaScript que recorra un array de 10 números y calcule la media aritmética de diez números.
// Los números deben de estar comprendidos entre el 0 y 100,
// si se detectará algún número fuera de ese rango no se tendría en cuenta para su cálculo.

/**
 * Devuelve un array de 10 números
 *
 * @returns Array de números
 */
function generarArray() {
    let lista = [];
    for (let i = 0; i < 10; i++) {
        let numero = obtenerNumeroRandom();
        lista.push(numero);
    }
    return lista;
}

/**
 * Devuelve un número aleatorio comprendido entre 0 y 100, ambos inclusive.
 *
 * @returns {number} Número entero entre 0 y 100.
 */
function obtenerNumeroRandom() {
    return Math.floor(Math.random() * 101);
}

/**
 * Devuelve el número de elementos del array que sirven para calcular la media
 *
 * @param {Array} arrayDeNumeros Array de números
 * @returns Número de elementos del array que sirven para calcular la media
 */
function obtenerDivisor(arrayDeNumeros) {
    let divisor = 0;
    arrayDeNumeros.map((numero) => numero <= 100 ? divisor++ : divisor)
    return divisor;
}

/**
 * Devuelve la media aritmética de los números del array entre 0 y 100
 *
 * @param {Array} arrayDeNumeros Array de números
 * @returns Media artimética de los elementos del array entre 0 y 100
 */
function obtenerMedia(arrayDeNumeros) {
    const divisor = obtenerDivisor(arrayDeNumeros);
    const arrayValido = arrayDeNumeros.filter((numero) => numero <= 100);
    return arrayValido.reduce((total, cantidad) => total + cantidad) / divisor;
}

const numeros = generarArray();
const mediaAritmetica = obtenerMedia(numeros);

// REQUERIMIENTO 2
// Calcular la moda

/**
 * Calcula la moda de un array de números.
 *
 * @param {Array} arrayDeNumeros Array de números
 * @returns Si la moda de los elementos de un array existe, se calcula. Si no, devuelve un mensaje diciendo que no existe
 */
function calcularModa(arrayDeNumeros) {
    const setDeNumeros = new Set(arrayDeNumeros);
    const arraySinDuplicados = [...setDeNumeros];
    const moda = [];
    let mapaNumeros = [];

    arraySinDuplicados.map((numero) => {
        const frecuencia = obtenerFrecuencias(arrayDeNumeros, numero);
        mapaNumeros.push([numero, frecuencia])
    })

    mapaNumeros.sort((a, b) => b[1] - a[1]);

    const mapaModa = mapaNumeros.filter((elemento) => {
        return elemento[1] === mapaNumeros[0][1]
    });

    mapaModa.map((par) => moda.push(par[0]));

    if (moda !== []) {
        return moda;
    } else {
        return 'La moda no existe'
    }
}

/**
 * Devuelve el número de veces que un elemento aparece en un array
 *
 * @param {Array} array Array de números
 * @param {number} valor Número que localizar en el array
 * @returns Número de veces que un número aparece en un array
 */
function obtenerFrecuencias(array, valor) {
    return array.reduce((acumulado, numero) => (numero === valor ? acumulado + 1 : acumulado), 0);
}

const moda = calcularModa(numeros);

// REQUERIMIENTO 3
// Calcular la mediana

/**
 * Calcula la mediana del array
 *
 * @param {Array} arrayDeNumeros
 * @returns {number} Mediana de los números que forman el array
 */
function calculaMediana(arrayDeNumeros) {
    const longitudArray = arrayDeNumeros.length;
    const arrayOrdenado = arrayDeNumeros.sort();
    if (longitudArray % 2 === 0) {
        return arrayOrdenado.slice(longitudArray/2 - 1, longitudArray/2 + 1).reduce((a, b) => a + b)/2;
    } else {
        return arrayOrdenado.slice((longitudArray-1)/2)[0];
    }
}

const mediana = calculaMediana(numeros);


console.log('El array sobre el que vamos a operar es:\n ', numeros);
console.log(`Media aritmética: ${mediaAritmetica}`);
console.log(`Mediana: ${mediana}`);
console.log(`Moda: ${moda}`)