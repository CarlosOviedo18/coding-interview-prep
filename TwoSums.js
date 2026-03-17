// 🧠 Problema: Two Sum

// Dado un arreglo de enteros nums y un entero target, debes encontrar dos índices distintos i y j tales que:

// nums[i] + nums[j] == target

// 🧾 Ejemplo 1:
// Entrada:
// nums = [2, 7, 11, 15]
// target = 9

// Salida:
// [0, 1]




// Intenta resolverlo solo con esta pista:

// “Mientras recorres el array, guarda en un Map lo que ya viste”
// Pregúntate en cada paso:
// ¿Qué necesito guardar en el Map?
// ¿Qué estoy buscando?
// Si te atoras → vienes y me dices:

// 💡 Mini pista (sin spoilear la solución)
// En Two Sum siempre hay una idea clave:
// “Si tengo un número… ¿qué número me falta para llegar al target?”
// Eso es TODO el truco. El Map solo sirve para recordar lo que ya viste.

const twoSums = (nums, target) => {

  const map = new Map();
    const total = 0;

  for (const i of nums) {

    for (const j of nums) {
        
           if(map.has(nums)){
            
             map.set( total, map.get(i + j));

           }

           if(total === target){
            console.log(target, "=" ,total)
           }
    }

  }
};
twoSums([2, 7, 11, 15], 9);
