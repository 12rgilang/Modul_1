// Create a function to check if two objects are equal

function Different(obj1, obj2){
    let arr1 = []
    for(let key in obj1){
        arr1.push(key)
    }

    let arr2 = []
    for(let key in obj2){
        arr2.push(key)
    }

    for(let i=0; i<arr1.length; i++){
        if(arr2.includes(arr1[i])){

        }else{
            return false
        }
    }
    return true
}

let obj1 = {
    name: "Gilang",
    umur: 20,
    asal: "Tangerang"
}

let obj2 = 
{
    nama: "Gilang",
    sad: 1997-12-01,
    asal: "Tangerang"
}

console.log(Different(obj1, obj2))