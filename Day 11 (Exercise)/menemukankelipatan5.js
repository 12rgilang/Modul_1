// temukan angka kelipatan 5
let arr = []
let input = [1, 3, 10, 5, 100, 2, 8, 6]
for(let i=0; i<input.length;i ++){
    if(input[i] % 5 === 0)
    arr.push(input[i])
}

console.log(arr)