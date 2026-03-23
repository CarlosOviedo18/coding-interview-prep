// Problema: Valid Anagrams

// Se te proporciona dos cadenas de texto s y t. Tu objetivo es determinar si t es un anagrama de s.

// Un anagrama es una palabra o frase formada al reorganizar exactamente los mismos caracteres de otra, utilizando todos los caracteres originales exactamente una vez.

// Requisitos
// Ambas cadenas contienen únicamente caracteres alfabéticos en minúscula.
// Debes retornar un valor booleano:
// true si t es un anagrama de s.
// false en caso contrario.

// Ejemplos
// Entrada: s = "anagram", t = "nagaram"
// Salida: true
// Entrada: s = "rat", t = "car"
// Salida: false

//usar un map y valdiar las palabras con el indice tal vez
// tambien armar las palabras y valdiar q sean iguales

// validar solo q tengan las mismas letras no importan el orden si tiene todo igual true
// si no false
//utilizo set y me qgui con el ejrciode de primer repetido

//hago u nset y luego guardo, luegi valido si la letra ya la vi antes y si es asi
//la guardo y si todas se vieron antes entocens todo bine pero si yo guardo una y luego no
//la vuelvo a ver signuiuca q la palabra no es igual

//map para validar una de otra en uno mismo

const validAnagrams = (s, t) => {
  const map = new Map();

  const map1 = new Map();

  const arr1 = s.split("");
  const arr2 = t.split("");

  for (palabra1 of arr1) {
    if (map.has(palabra1)) {
      map.set(palabra1, map.get(palabra1) + 1);
    } else {
      map.set(palabra1, +1);
    }
  }

  for (palabra2 of arr2) {
    if (map1.has(palabra2)) {
      map1.set(palabra2, map1.get(palabra2) + 1);
    } else {
      map1.set(palabra2, +1);
    }
  }

//AQUI SE VALIDA LOS TOTALES


return map
};

console.log(validAnagrams("anagram", "nagaram"));

