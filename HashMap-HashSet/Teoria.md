# Hash Map y Hash Set en JavaScript

Estas son dos estructuras de datos fundamentales para resolver problemas de búsqueda,
conteo y detección de duplicados de forma **eficiente** (tiempo O(1) por operación).

---

## 🗂️ Hash Map (`Map`)

Un **Map** almacena pares de **clave → valor**. Piensa en él como un diccionario:
buscas una palabra (clave) y obtienes su definición (valor).

### ¿Cuándo usarlo?

- Cuando necesitas **contar** cuántas veces aparece algo (letras, palabras, números).
- Cuando necesitas **asociar** un dato con otro (nombre → edad, producto → precio).
- Cuando necesitas buscar si algo existe **y además saber un dato extra** sobre ese elemento.

### Sintaxis básica

```js
const map = new Map();

// ✅ Agregar elementos (clave, valor)
map.set("nombre", "Carlos");
map.set("edad", 22);

// ✅ Obtener un valor por su clave
map.get("edad"); // → 22

// ✅ Verificar si una clave existe
map.has("nombre"); // → true
map.has("apellido"); // → false

// ✅ Eliminar un elemento
map.delete("edad");

// ✅ Ver cuántos elementos tiene
map.size; // → 1

// ✅ Limpiar todo el Map
map.clear();

para  recoorr el map y hacer algo
siempre se recodre recordar q el map es un objeto
map.get(clave) → validar una letra
map.values() → validar todos los valores
map.entries() → validar clave + valor
```

### Recorrer un Map

Se usa `for...of` con destructuring `[clave, valor]`:

```js
const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

for (const [clave, valor] of map) {
  console.log(clave, "→", valor);
}
// a → 1
// b → 2
// c → 3
```

### Patrón típico: Contar frecuencias

Este patrón aparece en MUCHOS problemas. Memorízalo:

```js
const contarFrecuencias = (elementos) => {
  const map = new Map();

  for (const elem of elementos) {
    if (map.has(elem)) {
      map.set(elem, map.get(elem) + 1); // ya existe → sumar 1
    } else {
      map.set(elem, 1); // primera vez → empieza en 1
    }
  }

  return map;
};
```

---

## 🎯 Hash Set (`Set`)

Un **Set** almacena **valores únicos** (sin duplicados, sin claves).
Piensa en él como una lista donde no se puede repetir nada.

### ¿Cuándo usarlo?

- Cuando necesitas **detectar duplicados** rápidamente.
- Cuando necesitas saber si un elemento **ya fue visto** antes.
- Cuando solo te importa **si existe o no**, sin necesidad de un valor asociado.

### Sintaxis básica

```js
const set = new Set();

// ✅ Agregar elementos
set.add(1);
set.add(2);
set.add(3);
set.add(3); // ❌ No se agrega, ya existe
console.log(set); // Set { 1, 2, 3 }

// ✅ Verificar si existe un valor
set.has(3); // → true
set.has(5); // → false

// ✅ Eliminar un elemento
set.delete(2);

// ✅ Ver cuántos elementos tiene
set.size; // → 2

// ✅ Limpiar todo el Set
set.clear();
```

### Recorrer un Set

```js
for (const valor of set) {
  console.log(valor);
}
```

### Patrón típico: Detectar duplicados

```js
const tieneDuplicados = (arr) => {
  const vistos = new Set();

  for (const elem of arr) {
    if (vistos.has(elem)) return true; // ¡ya lo vi antes!
    vistos.add(elem);
  }

  return false; // ninguno se repitió
};
```

---

## 🆚 ¿Map o Set? Guía rápida

| Pregunta                                      | Usa...   |
| --------------------------------------------- | -------- |
| ¿Solo necesito saber si existe?               | **Set**  |
| ¿Necesito contar cuántas veces aparece?       | **Map**  |
| ¿Necesito asociar un dato con otro?           | **Map**  |
| ¿Necesito eliminar duplicados de una lista?   | **Set**  |
| ¿Necesito buscar algo en tiempo O(1)?         | Ambos ✅ |

---


