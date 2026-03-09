// ============================================
// 📌 Ejercicio 3: Primer Número Repetido
// ============================================
// PROBLEMA:  Dado un array de números, encontrar y devolver el PRIMER número
//            que se repite (en orden de aparición).
//
// EJEMPLO:   [5, 3, 4, 2, 3, 1] → 3  (el 3 es el primero que se repite)
//            [1, 2, 3, 4, 5]    → undefined (ninguno se repite)
//
// CONCEPTO CLAVE: Igual que ContainsDuplicate usamos un Set, pero en vez
//                 de devolver true/false, devolvemos el número que se repitió.
//
// COMPLEJIDAD: Tiempo O(n) | Espacio O(n)
// ============================================

const primerRepetido = (arr) => {
  const vistos = new Set();

  for (const num of arr) {
    if (vistos.has(num)) {
      return num; // ¡Este es el primero que se repite!
    }
    vistos.add(num);
  }

  return undefined; // Ningún número se repitió
};


console.log(primerRepetido([5, 3, 4, 2, 3, 1])); // → 3
console.log(primerRepetido([1, 2, 3, 4, 5]));     // → undefined
console.log(primerRepetido([1, 2, 1, 3, 2]));     // → 1 (el 1 se repite antes que el 2)
