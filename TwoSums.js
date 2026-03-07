//HASHMap
//El map funciona para agregar CLAVE Y VALOR
// const map = new Map();

// map.set("name", "Carlos");
// map.set("age", 22); // agregar al map

// console.log(map.get("age"))  el get para mistrar lo q quiero

// Verificar si existe la clave
map.has("a")
console.log(map.has("Carlos"))

// Elimianr Elemento
map.delete("a")

// Saber el Size
map.size

// Para limpiar todo
map.clear()

//Como trabajar con uno:

//Se recorre con un forOf

for( const [key, value] of map){
console.log(key,value)
}

//---------------------------------------------------

// Hash Set (Set) – Sintaxis básica

// Funcionaldiad hace q los datos en un objeto no se repitan q sean unicos
const set = new Set();

// para agregar
set.add(1)
set.add(2)
set.add(3)
set.add(3)
console.log(set)

// verificar si existe
set.has(5)
console.log(set.has(3))

// eliminar elemento
set.delete(5)

//  ver Size
set.size

// limpiar
set.clear()

// Se recorre con un forOf

for(let value of set){
    console.log(value)
}

//------Ejercicio--------------

// const hasDuplicate = (nums) => {

//   const set = new Set();

//   for (let num of nums) {
//     if (set.has(num)) {
//       return true;
//     }
//     set.add(num);
//   }
//   return false;


// console.log(hasDuplicate([1,2,3,4,2]))



// const LetterFind = (arr) => {
//   const map = new Map();
//   let count = 0;
//   for (let letter of arr) {
//     if (map.has(letter)) {
//       count = map.get(letter) + 1;
//       map.set(letter, count);
//     } else {
//       map.set(letter, 1);
//     }
//   }

//   return map;
// };

// console.log(LetterFind(["a", "b", "a", "c", "b"]));

// 1️⃣ Contains Duplicate
// 2️⃣ Valid Anagram
// 3️⃣ Two Sum
// 4️⃣ Group Anagrams


//Ejercicio 1 — Encontrar el primer número repetido

// Ejercicio 2 — Contar palabras