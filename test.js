const twoSums = (arr, target) => {
    const map = new Map();

    for(const [indice, value] of arr.entries()){
        const nTarget = target - value

        if(map.has(nTarget)){
            return [map.get(nTarget), indice]
        }else{
            map.set(value, indice)

        }
    }

}

console.log(twoSums([2, 7, 11, 15], 9));