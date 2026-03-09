// ============================================
// 📌 Ejercicio 2: Contar Letras
// ============================================
// PROBLEMA:  Dado un array de letras, contar cuántas veces aparece cada una.
//            Devolver un Map con cada letra como clave y su cantidad como valor.
//
// EJEMPLO:   ["a", "b", "a", "c", "b"] → Map { "a" → 2, "b" → 2, "c" → 1 }
//
// CONCEPTO CLAVE: Usamos un Map porque necesitamos asociar cada letra (clave)
//                 con su cantidad de apariciones (valor).
//
// COMPLEJIDAD: Tiempo O(n) | Espacio O(n)
// ============================================

const contarLetras = (arr) => {
  const map = new Map();

  for (const letra of arr) {
    if (map.has(letra)) {
      // La letra ya existe en el mapa → le sumamos 1
      map.set(letra, map.get(letra) + 1);
    } else {
      // Primera vez que vemos esta letra → empieza en 1
      map.set(letra, 1);
    }
  }

  return map;
};

// 🧪 Pruebas
console.log(contarLetras(["a", "b", "a", "c", "b"]));
// → Map { 'a' => 2, 'b' => 2, 'c' => 1 }

console.log(contarLetras(["x", "y", "x", "x", "z"]));
// → Map { 'x' => 3, 'y' => 1, 'z' => 1 }
