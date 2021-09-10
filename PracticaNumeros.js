/* Crear un array que contenga números del 1 al 10. Retornar un nuevo
array que contenga todos los números multiplicados por dos */

let numeros = [];

for (let i = 0; i < 100 ; i++) {
    numeros.push(i+1)
}

let numerosPorDos = numeros.map(function(numero){
    return numero  * 2
});
console.log(numerosPorDos);

/* Del array que devuelve el ejercicio número 5, filtrar los que sean 
mayores a 5
 */

let numerosMayores = numerosPorDos.filter(numero => numero > 5)
console.log(numerosMayores);

/* Del array que devuelve el ejercicio 6, buscar el primero que sea
 mayor a 10 
 */

let primerNumero = numerosMayores.find(numero => numero > 10)
console.log(primerNumero);

/* Dado el siguiente array filtremos a los pokemones con poder 
menor a 10.
 */

let pokemones = [ 
    { nombre: 'pikachu', poder: 12 },
    { nombre: 'bulbasaur', poder: 6 },
    { nombre: 'charizard', poder: 19 },
    { nombre: 'squirtle', poder: 3 },
    { nombre: 'metwo', poder: 6 }, 
]

let pokemonFiltrado = pokemones.filter(pokemon => pokemon.poder < 10);
console.log(pokemonFiltrado);
