//1. ¿Qué me están pidiendo?
// 2. ¿Qué entra?
// 3. ¿Qué sale?
// 4. Dame un ejemplo pequeño
// 5. ¿Cómo lo haría como humano?
//  for (const [indice, valor] of nums.entries()) {
const GroupAnagrams = (arr) => {
  const map = new Map();


  for (const valor of arr) {

     const newValor = valor.split("").sort().join("")
    map.set(valor, newValor);

  }

  for(const valor of map.values()){
   
    
  }



return map

};
console.log(GroupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
