// Dengan Array
// let input = 10, fibo1 = 0, fibo2 = 1, arr=[], i = 1

// while(i <= input){
//     i++

//     arr.push(fibo1)
//     fibo1 = fibo1 + fibo2

//     arr.push(fibo2)
//     fibo2 = fibo2 + fibo1

// } console.log(arr.slice(0, input))

// cara tanpa array

let fibo = "011" 
let input = 10 // exit jika bertemu i = 10 

for(let i=3; i<input; i++){ 
    fibo += Number(fibo[i-1]) + Number(fibo[i-2])
}
console.log(fibo)
