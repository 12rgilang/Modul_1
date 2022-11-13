// ● Write a code to check whether the number is odd or even
// Bilangan genap ---> Bilangan yang habis dibagi 0
// bilangan % 2 === 0 -> Bilangan GEnap
// bilangan % 2 === 1 -> Bilangan Ganjil

// 1. Defie variable
let bilangan = 11
// 2. Hitung
if(bilangan % 2 === 0){
    console.log("Bilangan Genap")
}else{
    console.log("Bilangan Ganjil")
}

// 2. buat array nomor 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    arr.sort((a, b) => b % 2 - a % 2 || a - b);
    console.log(arr);