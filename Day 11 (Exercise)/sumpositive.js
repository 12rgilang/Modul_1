// positive sum
// ex input: [1, 5, 100, -10, 0, -30]
//    output: 106
// penjumlahan hasil positive
let arr = 0
let input = [1, 5, 100, -10, 0, -30]
for(let i=0; i<input.length; i++){
    if(input[i] > 0)
    arr += input[i]
}

console.log(arr)

// with function
function input(num){
let arr = 0
for(let i=0; i<num.length; i++){
    if(num[i] > 0)
    arr += num[i]
}
return arr
}
console.log(input([1, 5, 100, -10, 0, -30]))

let arr1 = 0
let input = [1, "abc", 100, -10, -0, -30]
for(let i=0; i < input.length; i++ ){
    if(isNaN(input[i])){
        console.log("False")
    }else{
        arr1 += input[i]
    }
}
console.log(arr1)