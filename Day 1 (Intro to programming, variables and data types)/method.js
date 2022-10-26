//  string
// 1. length
let text = "abcdefg"
console.log(text.length)
// 2. slice --> mengambil karakter dimulai dari 0 - 4 (4 tidak ikut)
console.log(text.slice(0, 4)) // (start, end)
// 3. substring
console.log(text.substring(4, 0)) // ketika terjadi substring, maka akan diswap karena index dimulai dari 0
// 4. replace
console.log(text.replace('a', 'bbbbbbb'))
// 5. toUpper & toLower
console.log(text.toUpperCase())
console.log(text.toLowerCase())
// 6. concat --> menggabungkan 2 variable yang memiliki tipe data string
let text1 = "saya"
let text2 = "Gilang"
let text3 = text1.concat(` ${text2}`)
console.log(text3)
// 7. indexof --> mencari posisi index dari suatu karakter
console.log(text.indexOf('c'))
// case 1 ingin merubah 1 huruf menjadi uppercase
// step.1 kita ambil 1 huruf yang diinginkan
let newChar = text.slice(0, 1) // mengambil huruf antara index 0-->1
let newCharToUpperCase = newChar.toUpperCase()
console.log(newCharToUpperCase)

// Number
// 1. toString --> merubah number menjadi string
let number = 123
console.log(number)
console.log(number.toString())

// case 1. untuk mengambil angka ke-2 dari var number
// step.1 kita ubah menjadi string
let numbeToString = number.toString() // "123"
//  step2. Kita ambil karakter ke-2 nya menggunakan method slice
let char2OfNumber = numberToString.slice(1, 2) // "2" Start dari no 2 dan no 3 tidak termasuk
console.log(char2OfNumber)

let number1 = "23123SAD"
console.log(Number(number1)) // strict rules applied
console.log(parseInt(number1)) // menyeleeksi hanya nomor didepan sebelum bertemu dengan huruf
