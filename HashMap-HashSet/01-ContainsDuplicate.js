// ============================================
// 📌 Ejercicio 1: Contains Duplicate
// ============================================
// PROBLEMA:  Dado un array de números, determinar si contiene algún duplicado.
//            Devolver true si hay al menos un valor repetido, false si todos son únicos.
//
// EJEMPLO:   [1, 2, 3, 4, 2] → true  (el 2 aparece dos veces)
//            [1, 2, 3, 4, 5] → false (todos son diferentes)
//
// CONCEPTO CLAVE: Usamos un Set porque solo necesitamos saber si un número
//                 ya fue visto antes. No necesitamos contar cuántas veces aparece.
//
// COMPLEJIDAD: Tiempo O(n) | Espacio O(n)
// ============================================

const hasDuplicate = (nums) => {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      return true; // Este número ya lo vimos → hay duplicado
    }
    set.add(num); // Lo guardamos como "ya visto"
  }

  return false; // Recorrimos todo sin encontrar repetidos
};

// 🧪 Pruebas
console.log(hasDuplicate([1, 2, 3, 4, 2])); // → true
console.log(hasDuplicate([1, 2, 3, 4, 5])); // → false
console.log(hasDuplicate([1]));              // → false
console.log(hasDuplicate([1, 1]));           // → true
