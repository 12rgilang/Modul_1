// case. kita memiliki sebuah function penjumlahan, kemudian hasilnya kita tampilkan di dalam function lain.

// contph untuk prosesnya saja, belum callback
function Output(bebas){
    return bebas * 2
}
function Penjumlahan(num1, num2){
    return num1 + num2 
}
let resultPenjumlahan = Penjumlahan(1, 2)
console.log(Output(resultPenjumlahan))

// Callback Function
// function yang dijadikan argumetn oleh function lain
// 1. indirect callback
function Output1(data){
    return data * 2
}

function Penjumlahan1(num1, num2, cb){
    let result = num1 + num2
    return cb(result)
}

console.log(Penjumlahan1(1, 2, Output1))

// 2. direct callback
function Penjumlahan2(num1, num2, cb){
    let result = num1 +num2
    return cb(result)
}

console.log(Penjumlahan2(1, 2, function Output2(data){
    return data * 2
}))