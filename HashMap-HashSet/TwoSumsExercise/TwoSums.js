// 🧠 Problema: Two Sum

// Dado un arreglo de enteros nums y un entero target, debes encontrar dos índices distintos i y j tales que:

// nums[i] + nums[j] == target

// 🧾 Ejemplo 1:
// Entrada:
// nums = [2, 7, 11, 15]
// target = 9

// Salida:
// [0, 1]

const twoSums = (nums, target) => {
  const map = new Map();

  for (const [indice, valor] of nums.entries()) {
    const findNumber = target - valor;

    if (map.has(findNumber)) {
      return [map.get(findNumber), indice];
    } else {
      map.set(valor, indice);
    }
  }
};

console.log(twoSums([2, 7, 11, 15], 9));


