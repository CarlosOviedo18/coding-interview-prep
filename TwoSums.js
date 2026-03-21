// 🧠 Problema: Two Sum

// Dado un arreglo de enteros nums y un entero target, debes encontrar dos índices distintos i y j tales que:

// nums[i] + nums[j] == target

// 🧾 Ejemplo 1:
// Entrada:
// nums = [2, 7, 11, 15]
// target = 9

// Salida:
// [0, 1]

// const twoSums = (nums, target) => {
//   const map = new Map();

//   for (const [indice, valor] of nums.entries()) {
//     const findNumber = target - valor;

//     if (map.has(findNumber)) {
//       return [map.get(findNumber), indice];
//     } else {
//       map.set(valor, indice);
//     }
//   }
// };

// console.log(twoSums([7, 2, 11, 15], 9));


// PROBLEMA:Dado un array de números, determinar si contiene algún duplicado.
//Devolver true si hay al menos un valor repetido, false si todos son únicos.



// const duplicadeNumber = (array) => {
//     const set = new Set();

//     for (const valor of array){
//         if(set.has(valor)){
//             return true
//         } 
//             set.add(valor) 
//     }
//     return false 


// };

// console.log(duplicadeNumber([2, 3, 5, 6, 56, 1]))

// PROBLEMA:Dado un array de letras, contar cuántas veces aparece cada una.
//Devolver un Map con cada letra como clave y su cantidad como valor.

const countLetter = (array) => {
    const map = new Map();
    for(elem of array){

        if(map.has(elem)){
            map.set(elem, map.get(elem) + 1)
        }else {
            map.set(elem, + 1)
        } 
    }
return map

}


console.log(countLetter(["a", "b", "a", "c", "b"]));