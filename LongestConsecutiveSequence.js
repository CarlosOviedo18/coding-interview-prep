// Input: nums = [100, 4, 200, 1, 3, 2]
// Output: 4

// Explicación:
// La secuencia consecutiva más larga es [1, 2, 3, 4].
// Por lo tanto, la longitud es 4.

//   map.get(clave).push(palabra);
const SecuenciaMasLarga = (numeros) => {
  const conjunto = new Set(numeros);

  let secuenciaMasLarga = [];

  for (let numero of numeros) {
    // verificar si es el inicio de una secuencia
    if (!conjunto.has(numero - 1)) {
      let numeroActual = numero;

      let secuenciaActual = [numeroActual];
  
      // seguir mientras exista el siguiente número
      while (conjunto.has(numeroActual + 1)) {
        numeroActual++;

        secuenciaActual.push(numeroActual);
      }

      // guardar si esta secuencia es más larga
      if (secuenciaActual.length > secuenciaMasLarga.length) {
        secuenciaMasLarga = secuenciaActual;
      }
    }
  }

  return secuenciaMasLarga;
};

console.log(SecuenciaMasLarga([100, 4, 200, 1, 3, 2]));

//tengo 100, le sumo +1, valido existe 101
//no, entocnes guardo 100 en map
//tengo 4 , le sumo +1 , valido existe 5
//no, entocnes guardo 4 en map
//tengo 200 , le sumo +1 , valido existe 201
//no, entocnes guardo 200 en map

// map = 100, 4, 200
//-----------
//tengo 1, le sumo +1, valido existe 2
// si guardo 1 en arrayNuevo
//tengo 3 , le sumo +1, valido existe 4
//si guardo 3 en arrayNuevo
//tengo 2 , le sumo +1, valido existe 3
//si guardo 2 en arrayNuevo
//arrayNuevo = 1, 3 , 2

//pdoria buscar y emepzar por el mas peque

//let numeros = [40, 10, 1, 5, 25];

// numeros.sort((a, b) => a - b);
// console.log(numeros); // [1, 5, 10, 25, 40]
