


const GroupAnagrams = (arr) => {
    const map = new Map();


    //  for (const [indice, valor] of nums.entries()) {

    for(const valor of arr ){
        
        if(map.has(valor)){
            map.set( valor, map.get(valor) + 1)
        }
        map.set(valor, 1);
        
    
    }

    return map








}
console.log(GroupAnagrams(["eat","tea","tan","ate","nat","bat"]));