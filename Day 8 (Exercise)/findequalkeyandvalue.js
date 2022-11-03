// ● Create a function to get the intersection of two objects ● Example
// ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// ○ Output:{ a: 1 }


// from Stackoverflow
// function intersectingKeys(...objects) { // menggunakan spreadoperator
//     return objects
//       .map((object) => Object.values(object)) //
//       .sort((a, b) => a.length - b.length)
//       .reduce((a, b) => a.filter((value) => b.includes(value)))
      
//   }

//   var firstObject = 
//   {
//     a: 1,
//     b: 2,
//     c: 3
//   };
  
//   var secondObject = {
//     a: 2,
//     c: 3
//   }
  
// console.log(intersectingKeys(firstObject, secondObject))


// cara kelas
function myfunc (obj1, obj2){
    let arr1 = [] // key obj1 --> [a,b]
    let arr1Val = [] // value obj ---> [1, 2]

    let arr2 = [] // key obj2 ---> [c, a]
    let arr2Val = [] // Value obj2 ---> [2,1]

    for(let key in obj1){
        arr1.push(key)
        arr1Val.push(obj1[key])
    }

    for(let key in obj2){
        arr2.push(key)
        arr2Val.push(obj2[key])

    }

    let objectNew = {}
    for(let i=0; i< arr1.length; i++){
        if(arr2.includes(arr1[i])){
           let idxArr2 = arr2.indexOf(arr1[i])
           if(arr2Val[idxArr2] === arr1Val[i]){
               objectNew[arr1[i]] = arr1Val[i];
           }
        }
    }
    return objectNew
}

    let user1 = 
    {
        a: 1,
        b: 2,
        c: 3
    };
    let user2  = 
    {
        a: 2,
        c: 3
     }

console.log(myfunc(user1, user2))