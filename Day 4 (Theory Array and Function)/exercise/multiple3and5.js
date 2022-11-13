// Case. Buatlah program untuk menjumlahkan setiap angka kelipatan 3 ataupun 5 kedalam sebuah variable
// ex n-looping =10 --> output =?
//    n-lopping =4 ---> ouput =3

let loopingNum = (n) => {
    let total = 0
    for(let i=0; i <= n; i++){
        if(i % 3 ===0 ){
            total += i
        }
    }
    return total
}

console.log(loopingNum(10))