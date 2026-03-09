// ============================================
// 📌 Ejercicio 4: Contar Palabras
// ============================================
// PROBLEMA:  Dado un array de palabras, contar cuántas veces aparece cada una.
//            Devolver un Map con cada palabra como clave y su cantidad como valor.
//
// EJEMPLO:   ["apple", "banana", "apple"] → Map { "apple" → 2, "banana" → 1 }
//
// CONCEPTO CLAVE: Es exactamente el mismo patrón que "Contar Letras" (ejercicio 02),
//                 pero con palabras. Esto demuestra que el patrón de frecuencias
//                 con Map funciona para CUALQUIER tipo de dato.
//
// COMPLEJIDAD: Tiempo O(n) | Espacio O(n)
// ============================================

const contarPalabras = (arr) => {
  const map = new Map();

  for (const palabra of arr) {
    if (map.has(palabra)) {
      // La palabra ya existe → le sumamos 1
      map.set(palabra, map.get(palabra) + 1);
    } else {
      // Primera vez que aparece → empieza en 1
      map.set(palabra, 1);
    }
  }

  return map;
};


console.log(contarPalabras(["apple", "banana", "apple", "orange", "banana", "apple"]));
// → Map { 'apple' => 3, 'banana' => 2, 'orange' => 1 }

console.log(contarPalabras(["hola", "mundo", "hola"]));
// → Map { 'hola' => 2, 'mundo' => 1 }
