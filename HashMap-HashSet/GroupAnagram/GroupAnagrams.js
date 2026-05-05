//estudairlo mas
//estudiar arrayfrom


const groupAnagrams = (arr) => {
  const map = new Map();

  for (const palabra of arr) {
    const clave = palabra.split("").sort().join("");

    if (!map.has(clave)) {
      map.set(clave, []);
    }

    map.get(clave).push(palabra);
  }

  return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));